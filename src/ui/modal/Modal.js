import React from 'react';

import { Backdrop, Close, ModalContent, ModalWrapper } from 'ui/modal/styles';

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
