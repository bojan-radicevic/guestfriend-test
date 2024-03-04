import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as CloseIcon } from 'assets/icons/close_icon.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContent = styled.div`
  position: absolute;
  width: 300px;
  top: 33%; /* Position one third of the way from the top */
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.2s ease;
`;

const Close = styled(CloseIcon)`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 3px;
  right: 3px;
  cursor: pointer;
  stroke: #000;

  path {
    fill: #000;
  }
`;

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <Backdrop onClick={onClose} />
      <ModalContent>
        <Close onClick={onClose} />
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};
