import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { INITIAL_REDUX_STATE } from 'util/constants/defaultValues';

export const boardSlice = createSlice({
  name: 'board',
  initialState: INITIAL_REDUX_STATE,
  reducers: {
    changeOrder: (state, action) => {
      const { newColumn, newColumnId } = action.payload;

      state.columns = {
        ...state.columns,
        [newColumnId]: newColumn
      };
    },
    changeColumn: (state, action) => {
      const { newStart, newStartId, newFinish, newFinishId } = action.payload;

      state.columns = {
        ...state.columns,
        [newStartId]: newStart,
        [newFinishId]: newFinish
      };
    },
    addTask: (state, action) => {
      const { columnId, taskContent } = action.payload;
      const ID = uuidv4();

      state.tasks = {
        ...state.tasks,
        [`${ID}`]: { id: ID, content: taskContent }
      };

      state.columns = {
        ...state.columns,
        [columnId]: {
          ...state.columns[columnId],
          taskIds: [ID, ...state.columns[columnId].taskIds]
        }
      };
    },
    deleteTask: (state, action) => {
      const { columnId, taskId } = action.payload;

      const { ...newTaskList } = state.tasks;
      delete newTaskList[taskId];

      state.tasks = { ...newTaskList };

      state.columns = {
        ...state.columns,
        [columnId]: {
          ...state.columns[columnId],
          taskIds: state.columns[columnId].taskIds.filter(
            item => item !== taskId
          )
        }
      };
    },
    searchTasks: (state, action) => {
      const { searchTerm } = action.payload;

      if (!searchTerm || searchTerm?.length < 2) {
        state.search = null;
        return;
      }

      const result = {};

      for (const [key, value] of Object.entries(state.columns)) {
        const tasks = value.taskIds;

        result[key] = {
          ...value,
          taskIds: tasks.filter(task =>
            state.tasks[task].content
              .toLowerCase()
              .includes(searchTerm.toLowerCase().trim())
          )
        };
      }

      state.search = result;
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

export default boardSlice.reducer;
