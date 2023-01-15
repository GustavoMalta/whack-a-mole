import { createSlice } from '@reduxjs/toolkit';
import { savePlayer } from '../Game/redux';

export interface PlayerSliceState {
  name: string;
}

const initialState = { name: '' } as PlayerSliceState;

export const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    savePlayerName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const setPlayerName =
  (name: string) => async (dispatch: (arg0: { payload: undefined; type: string }) => void) => {
    try {
      console.log(name);
      dispatch(savePlayer({ name, score: 0 }));
      dispatch(savePlayerName(name));
    } catch (err) {
      console.error(err);
    }
  };

export const { savePlayerName } = playerSlice.actions;

export default playerSlice.reducer;

//selectors
export const selectPlayerName = (state: { player: PlayerSliceState }) => state.player.name;
