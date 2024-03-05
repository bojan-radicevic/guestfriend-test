import { Column } from 'components/column/Column';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectTasks,
  selectColumns,
  selectColumnOrder,
  selectSearch
} from 'store/board/boardSelector';
import { changeOrder, changeColumn } from 'store/board/boardSlice';

import { SearchInput } from 'components/search/Search';

import { Container, Wrapper } from 'pages/board/styles';

export const Board = () => {
  const tasks = useSelector(selectTasks);
  const columns = useSelector(selectColumns);
  const columnOrder = useSelector(selectColumnOrder);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    // If draggable is moved outside droppable, do nothing
    if (!destination) {
      return;
    }

    // If draggable is dropped on the same place it started do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Get source column and destination column
    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    // Moving in the same list
    if (start === finish) {
      const newTaskIds = [...start.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      dispatch(changeOrder({ newColumnId: newColumn.id, newColumn }));

      return;
    }

    // Moving from one list to another
    const startTaskIds = [...start.taskIds];
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = [...finish.taskIds];
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    dispatch(
      changeColumn({
        newStartId: newStart.id,
        newStart,
        newFinishId: newFinish.id,
        newFinish
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <SearchInput />
        <Container>
          {columnOrder.map(columnId => {
            const column = search ? search[columnId] : columns[columnId];
            const tasksMap = column.taskIds.map(taskId => tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasksMap} />;
          })}
        </Container>
      </Wrapper>
    </DragDropContext>
  );
};
