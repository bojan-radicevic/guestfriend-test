import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { deleteTask, editTask } from 'store/board/boardSlice';

import { ResizableTextarea } from 'components/resizable-textarea/ResizableTextarea';

import { ReactComponent as CloseIcon } from 'assets/icons/close_icon.svg';

const handleTaskColorById = id => {
  switch (id) {
    case 'to_do':
      return '#08b4e9';
    case 'in_progress':
      return '#fc5f78';
    case 'done':
      return '#446076';
    default:
      return '#08b4e9';
  }
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  width: 100%;
`;

const Handle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${({ $columnId, $draggingOver }) =>
    $draggingOver
      ? handleTaskColorById($draggingOver)
      : handleTaskColorById($columnId)};
  width: 130px;
  min-height: 140px;
  height: 140px;
  overflow-wrap: break-word;
  word-break: break-word;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
`;

const Close = styled(CloseIcon)`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  display: none;

  ${Handle}:hover & {
    display: initial;
  }
`;

export const Task = ({ task, index, columnId }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [taskContent, setTaskContent] = useState(task?.content);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    dispatch(editTask({ taskId: task.id, taskContent }));
    setIsEditing(false);
  };

  const handleKeyPress = event => {
    if (event.code === 'Enter') {
      handleBlur();
    }
  };

  const handleInputChange = event => {
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
            <ResizableTextarea
              name="taskContent"
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyPress}
              value={taskContent}
              customStyles={{
                minHeight: '140px',
                height: '140px',
                marginBottom: '0px',
                borderColor: handleTaskColorById(columnId)
              }}
            ></ResizableTextarea>
          ) : (
            <Handle
              {...provided.dragHandleProps}
              $columnId={columnId}
              $draggingOver={snapshot.draggingOver}
              onDoubleClick={handleDoubleClick}
            >
              <Close onClick={handleDeleteTask} />
              {task.content}
            </Handle>
          )}
        </Container>
      )}
    </Draggable>
  );
};
