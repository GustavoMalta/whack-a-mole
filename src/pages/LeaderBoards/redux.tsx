import { createSlice } from '@reduxjs/toolkit';
import { getLeaderBoardList } from '../../api';
import { Player } from '../Game/redux';

export interface LeaderboardSliceState {
  name: string;
  leaderBoards: Player[];
  starded: boolean;
  gridData: number;
  score: number;
}

const initialState = { name: '' } as LeaderboardSliceState;

export const gameSlice = createSlice({
  name: 'leaderBoards',
  initialState: initialState,
  reducers: {
    setLeaderBoards: (state, action) => {
      state.leaderBoards = action.payload;
    },
  },
});

export const getLeaderBoard =
  () => async (dispatch: (arg0: { payload: undefined; type: string }) => void) => {
    try {
      const leaderboard = await getLeaderBoardList();
      dispatch(setLeaderBoards(leaderboard));
    } catch (err) {
      console.error(err);
    }
  };

export default gameSlice.reducer;

export const { setLeaderBoards } = gameSlice.actions;

//selectors
export const getLeaderBoards = (state: { leaderBoards: LeaderboardSliceState }) =>
  state.leaderBoards.leaderBoards;
