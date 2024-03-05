import React, { useEffect, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { addTask } from 'store/board/boardSlice';

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

  useEffect(() => {
    const closeOnEscapePressed = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeOnEscapePressed);
    return () => window.removeEventListener('keydown', closeOnEscapePressed);
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTaskContent('');
    setError(null);
    setHasError(false);
  };

  const handleAddTask = event => {
    event.preventDefault();

    if (taskContent?.trim()?.length < 3) {
      setError({ key: 'insufficient_length', count: 2 });
      setHasError(true);
      return;
    }
    if (taskContent?.trim()?.length > 65) {
      setError({ key: 'oversize_length', count: 65 });
      setHasError(true);
      return;
    }

    dispatch(addTask({ columnId: column.id, taskContent: taskContent.trim() }));
    closeModal();
  };

  const handleKeyPress = event => {
    if (event.code === 'Escape') {
      closeModal();
    }

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
              $columnId={column.id}
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
