import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Add,
  AddWrapper,
  Counter,
  Header,
  Title
} from 'components/column/styles';

export const ColumnHeader = ({ column, tasks, openModal }) => {
  const { t } = useTranslation();

  return (
    <Header $columnId={column.id}>
      <Title>
        {t(`column.${column.id}`)}
        <Counter>({tasks?.length})</Counter>
      </Title>
      <AddWrapper onClick={openModal}>
        <Add />
      </AddWrapper>
    </Header>
  );
};
