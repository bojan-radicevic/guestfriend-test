import React from 'react';

import { Column } from 'components/column/Column';

export const ColumnsList = ({ column, taskMap, index }) => {
  const tasks = column.taskIds.map(taskId => taskMap[taskId]);

  return <Column column={column} tasks={tasks} index={index} />;
};
