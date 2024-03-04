import React from 'react';
import styled from 'styled-components';
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
import { ColumnsList } from 'components/columns-list/ColumnsList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 32px);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100vw - 32px);
  height: calc(100vh - 92px);
`;

export const Board = () => {
  const tasks = useSelector(selectTasks);
  const columns = useSelector(selectColumns);
  const columnOrder = useSelector(selectColumnOrder);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

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
          {columnOrder.map((columnId, index) => {
            const column = search ? search[columnId] : columns[columnId];

            return (
              <ColumnsList
                key={column.id}
                column={column}
                index={index}
                taskMap={tasks}
              />
            );
          })}
        </Container>
      </Wrapper>
    </DragDropContext>
  );
};
