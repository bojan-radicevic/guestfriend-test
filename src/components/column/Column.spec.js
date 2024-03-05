import { render, screen } from 'util/helpers/test-util';

import { Column } from 'components/column/Column';

describe('Column component', () => {
  it('should render the column header with the correct title and task count', () => {
    const tasks = {
      'task-1': { id: 'task-1', content: 'Take out the garbage' },
      'task-2': { id: 'task-2', content: 'Watch my favorite show' },
      'task-3': { id: 'task-3', content: 'Charge my phone' },
      'task-4': { id: 'task-4', content: 'Cook dinner' }
    };
    const column = {
      id: 'to_do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    };

    render(<Column column={column} tasks={Object.values(tasks)} />);

    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('(4)')).toBeInTheDocument();
  });

  it('should handle empty task list', () => {
    const column = {
      id: 'to_do',
      taskIds: []
    };

    render(<Column column={column} tasks={[]} />);

    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('(0)')).toBeInTheDocument();
  });

  it('should render the list of tasks in the column', () => {
    // Mock data
    const column = {
      id: 'to_do',
      taskIds: ['task1', 'task2', 'task3']
    };
    const tasks = [
      { id: 'task1', content: 'Task 1' },
      { id: 'task2', content: 'Task 2' },
      { id: 'task3', content: 'Task 3' }
    ];

    const { getByText } = render(<Column column={column} tasks={tasks} />);

    tasks.forEach(task => {
      expect(screen.getByText(task.content)).toBeInTheDocument();
    });
  });
});
