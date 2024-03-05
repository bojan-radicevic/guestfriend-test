import styled from 'styled-components';

import { COLOR_PALETTE } from 'util/constants/defaultValues';

import { ReactComponent as AddIcon } from 'assets/icons/plus_icon.svg';

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
  background-color: ${({ $columnId }) => COLOR_PALETTE[$columnId].primary};
  color: #fff;
`;

const Title = styled.h3`
  padding: 8px 8px 8px 32px;
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
  background-color: ${({ $columnId }) => COLOR_PALETTE[$columnId].tertiary};
  flex-grow: 1;
  min-height: 100px;
  overflow: auto;
  margin-top: 6px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const AddTaskModalTitle = styled.span`
  color: ${({ $columnId }) => COLOR_PALETTE[$columnId].primary};
`;

const PromptModalTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const PromptModalButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export {
  Container,
  Header,
  Title,
  Add,
  List,
  Counter,
  AddWrapper,
  AddTaskModalTitle,
  PromptModalTitle,
  PromptModalButtonWrapper
};
