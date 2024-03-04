import React from 'react';

import { Task } from 'components/task/Task';

export const TasksList = ({ tasks, columnId }) =>
  tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} columnId={columnId} />
  ));
