import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { deleteTask, editTask } from 'store/board/boardSlice';

import { useEscapeKey } from 'hooks/useEscapeKey';

import { ResizableTextarea } from 'components/resizable-textarea/ResizableTextarea';
import { PromptModal } from 'components/task/ui/PromptModal';
import { Container, Close, Handle, EditWrapper } from 'components/task/styles';
import { Error } from 'styles/error';

import {
  COLOR_PALETTE,
  MIN_INPUT_LENGTH,
  MAX_INPUT_LENGTH
} from 'util/constants/defaultValues';

export const Task = ({ task, index, columnId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [taskContent, setTaskContent] = useState(task?.content);
  const [modalOpen, setModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsEditing(false);
    setTaskContent(task?.content);
    setError(null);
    setHasError(false);
  };

  useEscapeKey(closeModal);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = event => {
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

    dispatch(editTask({ taskId: task.id, taskContent: taskContent.trim() }));
    setIsEditing(false);
  };

  const handleKeyPress = event => {
    if (event.code === 'Enter' && event.shiftKey) {
      setTaskContent(event.target.value);
    }

    if (event.code === 'Enter' && !event.shiftKey) {
      handleBlur(event);
    }
  };

  const handleInputChange = event => {
    if (hasError) {
      setError(null);
      setHasError(false);
    }

    setTaskContent(event.target.value);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask({ columnId, taskId: task.id }));
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          {isEditing ? (
            <EditWrapper>
              <ResizableTextarea
                name="taskContent"
                onChange={handleInputChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyPress}
                value={taskContent}
                customStyles={{
                  minHeight: '104px',
                  height: '104px',
                  marginBottom: '0px',
                  borderColor: COLOR_PALETTE[columnId].secondary
                }}
              ></ResizableTextarea>
              <Error>
                {' '}
                {hasError
                  ? t(`errors.${error?.key}`, { count: error?.count })
                  : ''}
              </Error>
            </EditWrapper>
          ) : (
            <Handle
              {...provided.dragHandleProps}
              $columnId={columnId}
              $draggingOver={snapshot.draggingOver}
              onDoubleClick={handleDoubleClick}
            >
              <Close onClick={openModal} />
              {task.content}
            </Handle>
          )}
          <PromptModal
            modalOpen={modalOpen}
            closeModal={closeModal}
            handleDeleteTask={handleDeleteTask}
          />
        </Container>
      )}
    </Draggable>
  );
};
