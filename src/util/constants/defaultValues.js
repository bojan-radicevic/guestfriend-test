export const MIN_TEXTAREA_HEIGHT = 112;
export const INITIAL_REDUX_STATE = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' }
  },
  columns: {
    to_do: {
      id: 'to_do',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    in_progress: {
      id: 'in_progress',
      title: 'In Progress',
      taskIds: []
    },
    done: {
      id: 'done',
      title: 'Done',
      taskIds: []
    }
  },
  columnOrder: ['to_do', 'in_progress', 'done'],
  search: null
};
