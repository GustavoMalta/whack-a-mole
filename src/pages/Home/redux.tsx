import { createSlice } from '@reduxjs/toolkit';

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

export const { savePlayerName } = playerSlice.actions;

export default playerSlice.reducer;

//selectors
export const selectPlayerName = (state: { player: PlayerSliceState }) => state.player.name;
