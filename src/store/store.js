import { configureStore } from '@reduxjs/toolkit';

import boardReducer from 'store/board/boardSlice';

import { INITIAL_REDUX_STATE } from 'util/constants/defaultValues';

const sessionStorageMiddleware = store => next => action => {
  const result = next(action);

  const state = {
    ...store.getState(),
    board: {
      ...store.getState()?.board,
      search: null
    }
  };
  sessionStorage.setItem('board', JSON.stringify(state));

  return result;
};

const savedState = sessionStorage.getItem('board');
const preloadedState = savedState
  ? JSON.parse(savedState)
  : INITIAL_REDUX_STATE;

export const store = configureStore({
  reducer: {
    board: boardReducer
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    sessionStorageMiddleware
  ],
  preloadedState
});
