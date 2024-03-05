import styled from 'styled-components';

import { COLOR_PALETTE } from 'util/constants/defaultValues';

import { ReactComponent as CloseIcon } from 'assets/icons/close_icon.svg';

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
      ? COLOR_PALETTE[$draggingOver].secondary
      : COLOR_PALETTE[$columnId].secondary};
  width: 130px;
  min-height: 140px;
  height: 140px;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
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

const EditWrapper = styled.div`
  width: 100%;
  max-width: 224px;
  display: flex;
  flex-direction: column;
`;

export { Container, Handle, Close, EditWrapper };
