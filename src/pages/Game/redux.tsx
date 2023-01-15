import { createSlice } from '@reduxjs/toolkit';
import { setPlayerScore } from '../../api';
import { useAppSelector } from '../../hooks';

export interface GameSliceState {
  player: Player;
  moleUp: number;
  authorized: boolean;
  gridData: number;
  score: number;
  status: GameStatesEnum;
}
export enum GameStatesEnum {
  NOT_STARTED = 'NOT_STARTED',
  STARTED = 'STARTED',
  FINISHED = 'FINISHED',
}
export interface Player {
  id?: string;
  name: string;
  rank: number;
  score: number;
}

const initialState = {
  player: {},
  moleUp: -1,
  authorized: false,
  status: GameStatesEnum.NOT_STARTED,
} as GameSliceState;

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    savePlayer: (state, action) => {
      state.player = action.payload;
    },
    setMoleUp: (state, action) => {
      state.moleUp = action.payload;
    },
    setMoleHit: (state) => {
      state.moleUp = -1;
      state.score = state.score + 1;
    },
    authorize: (state) => {
      state.authorized = true;
    },
    unAthorize: (state) => {
      state.authorized = false;
    },
    start: (state) => {
      state.status = GameStatesEnum.STARTED;
    },
    stop: (state) => {
      state.moleUp = -1;
      state.status = GameStatesEnum.FINISHED;
    },
    restart: (state) => {
      state.moleUp = -1;
      state.score = 0;
      state.status = GameStatesEnum.NOT_STARTED;
    },
  },
});

export default gameSlice.reducer;

//async function (thunk)
export const startGameAsync =
  (totalMoles = 9) =>
  (dispatch: (arg0: { payload: undefined; type: string }) => void) => {
    dispatch(restart());
    dispatch(start());
    const intervalId = setInterval(() => {
      const up = Math.floor(Math.random() * totalMoles);
      dispatch(setMoleUp(up));
      console.log(up);
    }, 800);
    setTimeout(() => {
      console.log('finish');
      clearInterval(intervalId);
      dispatch(stop());
    }, 10000); // 120000 toe minutes
  };

export const setNewPlayer = (player: Player) => async () => {
  try {
    savePlayer(player);
    const playerSaved = await setPlayerScore(player);
    return playerSaved;
  } catch (err) {
    console.error(err);
  }
};

export const { savePlayer, start, stop, setMoleUp, setMoleHit, restart, authorize, unAthorize } =
  gameSlice.actions;

//selectors
export const getMoleUp = (state: { game: GameSliceState }) => state.game.moleUp;
export const getScore = (state: { game: GameSliceState }) => state.game.score;
export const getStatus = (state: { game: GameSliceState }) => state.game.status;
export const getPlayer = (state: { game: GameSliceState }) => state.game.player;
export const getAuthorized = (state: { game: GameSliceState }) => state.game.authorized;
