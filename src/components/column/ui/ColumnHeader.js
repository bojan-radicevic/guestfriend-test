import React from 'react';
import { useTranslation } from 'react-i18next';

import { COLOR_PALETTE } from 'util/constants/defaultValues';

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
    <Header $color={COLOR_PALETTE[column.id]?.primary}>
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
