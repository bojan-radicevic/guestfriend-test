import { createSelector } from '@reduxjs/toolkit';

const selectTasks = createSelector(
  state => state.board,
  board => board.tasks
);

const selectColumns = createSelector(
  state => state.board,
  board => board.columns
);

const selectColumnOrder = createSelector(
  state => state.board,
  board => board.columnOrder
);

const selectSearch = createSelector(
  state => state.board,
  board => board.search
);

export { selectTasks, selectColumns, selectColumnOrder, selectSearch };
