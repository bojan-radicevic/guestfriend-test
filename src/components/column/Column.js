import React, { useState } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { addTask } from 'store/board/boardSlice';

import { TasksList } from 'components/tasks-list/TasksList';
import { Modal } from 'components/modal/Modal';
import { ResizableTextarea } from 'components/resizable-textarea/ResizableTextarea';

import { ReactComponent as AddIcon } from 'assets/icons/plus_icon.svg';

const handleHeaderColorById = id => {
  switch (id) {
    case 'to_do':
      return '#0096e0';
    case 'in_progress':
      return '#f70058';
    case 'done':
      return '#032742';
    default:
      return '#0096e0';
  }
};

const handleListColorById = id => {
  switch (id) {
    case 'to_do':
      return '#b3e5f8';
    case 'in_progress':
      return '#ffbfc2';
    case 'done':
      return '#b9c3cc';
    default:
      return '#b3e5f8';
  }
};

const Container = styled.div`
  margin: 4px;
  min-width: 240px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 98px;
  background-color: ${({ $columnId }) => handleHeaderColorById($columnId)};
  color: #fff;
`;

const Title = styled.h3`
  padding: 8px;
  text-align: center;
  align-self: end;
  width: 100%;
  margin: 0px;
`;

const Counter = styled.div`
  margin-top: 0px;
`;

const AddWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const HelperDiv = styled.div`
  width: 32px;
`;

const Add = styled(AddIcon)`
  width: 16px;
  height: 16px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${({ $columnId }) => handleListColorById($columnId)};
  flex-grow: 1;
  min-height: 100px;
  overflow: auto;
  margin-top: 6px;
`;

const ModalTitle = styled.span`
  color: ${({ $columnId }) => handleHeaderColorById($columnId)};
`;

const SubmitButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#4caf50')};
  border: none;
  color: ${({ disabled }) => (disabled ? '#666' : 'white')};
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#45a049')};
  }
`;

export const Column = ({ column, tasks, index }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [taskContent, setTaskContent] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTaskContent('');
  };

  const handleAddTicket = event => {
    event.preventDefault();
    dispatch(addTask({ columnId: column.id, taskContent }));
    closeModal();
  };

  const handleKeyPress = event => {
    if (event.code === 'Enter') {
      handleAddTicket(event);
    }
  };

  const handleInputChange = event => {
    setTaskContent(event.target.value);
  };

  return (
    <>
      <Container>
        <Header $columnId={column.id}>
          <HelperDiv />
          <Title>
            {column.title}
            <Counter>({tasks?.length})</Counter>
          </Title>
          <AddWrapper>
            <Add onClick={openModal} />
          </AddWrapper>
        </Header>
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
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h4>
          Add task to{' '}
          <ModalTitle $columnId={column.id}>{column.title}</ModalTitle> column
        </h4>
        <form onSubmit={handleAddTicket} onKeyDown={handleKeyPress}>
          <ResizableTextarea
            name="taskContent"
            onChange={handleInputChange}
            value={taskContent}
          ></ResizableTextarea>
          <SubmitButton disabled={taskContent?.length < 3}>Submit</SubmitButton>
        </form>
      </Modal>
    </>
  );
};
