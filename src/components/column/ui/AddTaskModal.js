import React from 'react';
import { useTranslation } from 'react-i18next';

import { ResizableTextarea } from 'components/resizable-textarea/ResizableTextarea';
import { AddTaskModalTitle } from 'components/column/styles';
import { SubmitButton } from 'styles/buttons';
import { Error } from 'styles/error';
import { Modal } from 'ui/modal/Modal';

export const AddTaskModal = ({
  modalOpen,
  closeModal,
  column,
  hasError,
  error,
  handleAddTask,
  handleKeyPress,
  handleInputChange,
  taskContent
}) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={modalOpen} onClose={closeModal}>
      <h4>
        {t('column.add_task')}{' '}
        <AddTaskModalTitle $columnId={column.id}>
          {t(`column.${column.id}`)}
        </AddTaskModalTitle>{' '}
        {t('column.add_task_suffix')}
      </h4>

      <Error>
        {hasError ? t(`errors.${error?.key}`, { count: error?.count }) : ''}
      </Error>
      <form onSubmit={handleAddTask} onKeyDown={handleKeyPress}>
        <ResizableTextarea
          name="taskContent"
          onChange={handleInputChange}
          value={taskContent}
        ></ResizableTextarea>
        <SubmitButton disabled={taskContent?.trim()?.length < 3}>
          Submit
        </SubmitButton>
      </form>
    </Modal>
  );
};
