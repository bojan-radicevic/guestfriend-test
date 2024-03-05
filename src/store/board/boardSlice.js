import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { INITIAL_REDUX_STATE } from 'util/constants/defaultValues';
import { searchHelper } from 'util/helpers/searchHelper';

export const boardSlice = createSlice({
  name: 'board',
  initialState: INITIAL_REDUX_STATE,
  reducers: {
    changeOrder: (state, action) => {
      const { newColumn, newColumnId } = action.payload;

      const newColumnList = {
        ...state.columns,
        [newColumnId]: newColumn
      };

      if (state.searchTerm) {
        state.search = searchHelper(
          newColumnList,
          state.tasks,
          state.searchTerm
        );
      }

      state.columns = newColumnList;
    },
    changeColumn: (state, action) => {
      const { newStart, newStartId, newFinish, newFinishId } = action.payload;

      const newColumnList = {
        ...state.columns,
        [newStartId]: newStart,
        [newFinishId]: newFinish
      };

      if (state.searchTerm) {
        state.search = searchHelper(
          newColumnList,
          state.tasks,
          state.searchTerm
        );
      }

      state.columns = newColumnList;
    },
    addTask: (state, action) => {
      const { columnId, taskContent } = action.payload;
      const ID = uuidv4();

      const newTaskList = {
        ...state.tasks,
        [`${ID}`]: { id: ID, content: taskContent }
      };

      const newColumnList = {
        ...state.columns,
        [columnId]: {
          ...state.columns[columnId],
          taskIds: [ID, ...state.columns[columnId].taskIds]
        }
      };

      if (state.searchTerm) {
        state.search = searchHelper(
          newColumnList,
          newTaskList,
          state.searchTerm
        );
      }

      state.tasks = newTaskList;

      state.columns = newColumnList;
    },
    deleteTask: (state, action) => {
      const { columnId, taskId } = action.payload;

      const { ...newTaskList } = state.tasks;
      delete newTaskList[taskId];

      state.tasks = { ...newTaskList };

      const deleteTaskHelper = obj => ({
        ...obj,
        [columnId]: {
          ...obj[columnId],
          taskIds: obj[columnId].taskIds.filter(item => item !== taskId)
        }
      });

      if (state.search) {
        state.search = deleteTaskHelper(state.search);
      }

      state.columns = deleteTaskHelper(state.columns);
    },
    searchTasks: (state, action) => {
      const { searchTerm } = action.payload;

      if (!searchTerm || searchTerm?.length < 2) {
        state.search = null;
        state.searchTerm = '';
        return;
      }

      state.search = searchHelper(state.columns, state.tasks, searchTerm);
      state.searchTerm = searchTerm;
    },
    editTask: (state, action) => {
      const { taskId, taskContent } = action.payload;

      if (!taskContent || taskContent?.length < 3) {
        return;
      }

      state.tasks = {
        ...state.tasks,
        [taskId]: { ...state.tasks[taskId], content: taskContent }
      };
    }
  }
});

export const {
  changeOrder,
  changeColumn,
  addTask,
  deleteTask,
  searchTasks,
  editTask
} = boardSlice.actions;
