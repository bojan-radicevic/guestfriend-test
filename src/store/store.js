import { configureStore } from '@reduxjs/toolkit';

import { boardSlice } from 'store/board/boardSlice';
import { sessionStorageMiddleware } from 'store/middleware/sessionStorageMiddleware';

import { INITIAL_REDUX_STATE } from 'util/constants/defaultValues';

const savedState = sessionStorage.getItem('board');
const preloadedState = savedState
  ? JSON.parse(savedState)
  : INITIAL_REDUX_STATE;

export const store = configureStore({
  reducer: {
    board: boardSlice.reducer
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    sessionStorageMiddleware
  ],
  preloadedState
});
