import { configureStore } from '@reduxjs/toolkit';

import gameReducer from '../pages/Game/redux';
import playerReducer from '../pages/Home/redux';
import leaderBoards from '../pages/LeaderBoards/redux';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    game: gameReducer,
    leaderBoards: leaderBoards,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
