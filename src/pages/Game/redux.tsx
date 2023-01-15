import { createSlice } from '@reduxjs/toolkit';

export interface GameSliceState {
  name: string;
  moleUp: number;
  starded: boolean;
  gridData: number;
  score: number;
}

const initialState = { name: '', moleUp: -1, starded: false } as GameSliceState;

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    savePlayerName: (state, action) => {
      state.name = action.payload;
    },
    setMoleUp: (state, action) => {
      state.moleUp = action.payload;
    },
    setMoleHit: (state, action) => {
      state.moleUp = -1;
      state.score = state.score + 1;
    },
    start: (state) => {
      state.starded = true;
    },
    stop: (state) => {
      state.moleUp = -1;
      state.starded = false;
    },
    restart: (state) => {
      state.starded = false;
      state.moleUp = -1;
      state.score = 0;
    },
  },
});

export const { savePlayerName } = gameSlice.actions;

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
    }, 2000);
    setTimeout(() => {
      console.log('finish');
      clearInterval(intervalId);
      dispatch(stop());
    }, 10000); // 120000 toe minutes
  };
export const { start, stop, setMoleUp, setMoleHit, restart } = gameSlice.actions;

//selectors
export const getMoleUp = (state: { game: GameSliceState }) => state.game.moleUp;
export const getScore = (state: { game: GameSliceState }) => state.game.score;
export const getStarted = (state: { game: GameSliceState }) => state.game.starded;
