import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  PromptModalButtonWrapper,
  PromptModalTitle
} from 'components/column/styles';
import { Button, DismissButton } from 'styles/buttons';
import { Modal } from 'ui/modal/Modal';

export const PromptModal = ({ modalOpen, closeModal, handleDeleteTask }) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={modalOpen} onClose={closeModal}>
      <PromptModalTitle>{t('task.delete_task_prompt')}</PromptModalTitle>

      <PromptModalButtonWrapper>
        <DismissButton onClick={handleDeleteTask}>Delete</DismissButton>
        <Button onClick={closeModal}>Cancel</Button>
      </PromptModalButtonWrapper>
    </Modal>
  );
};
