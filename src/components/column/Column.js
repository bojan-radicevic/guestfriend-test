import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { addTask } from 'store/board/boardSlice';

import { useEscapeKey } from 'hooks/useEscapeKey';

import {
  COLOR_PALETTE,
  MAX_INPUT_LENGTH,
  MIN_INPUT_LENGTH
} from 'util/constants/defaultValues';

import { TasksList } from 'components/tasks-list/TasksList';
import { ColumnHeader } from 'components/column/ui/ColumnHeader';
import { AddTaskModal } from 'components/column/ui/AddTaskModal';
import { Container, List } from 'components/column/styles';

export const Column = ({ column, tasks }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [taskContent, setTaskContent] = useState('');
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTaskContent('');
    setError(null);
    setHasError(false);
  };

  useEscapeKey(closeModal);

  const handleAddTask = event => {
    event.preventDefault();

    if (taskContent?.trim()?.length < MIN_INPUT_LENGTH) {
      setError({ key: 'insufficient_length', count: 2 });
      setHasError(true);
      return;
    }
    if (taskContent?.trim()?.length > MAX_INPUT_LENGTH) {
      setError({ key: 'oversize_length', count: MAX_INPUT_LENGTH });
      setHasError(true);
      return;
    }

    dispatch(addTask({ columnId: column.id, taskContent: taskContent.trim() }));
    closeModal();
  };

  const handleKeyPress = event => {
    if (event.code === 'Enter' && event.shiftKey) {
      setTaskContent(event.target.value);
    }

    if (event.code === 'Enter' && !event.shiftKey) {
      handleAddTask(event);
    }
  };

  const handleInputChange = event => {
    if (hasError) {
      setError(null);
      setHasError(false);
    }

    setTaskContent(event.target.value);
  };

  return (
    <>
      <Container>
        <ColumnHeader column={column} tasks={tasks} openModal={openModal} />

        <Droppable droppableId={column.id} type="task">
          {(provided, snapshot) => (
            <List
              ref={provided.innerRef}
              {...provided.droppableProps}
              $isDraggingOver={snapshot.isDraggingOver}
              $color={COLOR_PALETTE[column.id]?.tertiary}
            >
              <TasksList tasks={tasks} columnId={column.id} />
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </Container>

      <AddTaskModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        column={column}
        hasError={hasError}
        error={error}
        handleAddTask={handleAddTask}
        handleKeyPress={handleKeyPress}
        handleInputChange={handleInputChange}
        taskContent={taskContent}
      />
    </>
  );
};
