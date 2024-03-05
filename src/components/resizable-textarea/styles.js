import styled, { css } from 'styled-components';
import { MIN_TEXTAREA_HEIGHT } from 'util/constants/defaultValues';

export const TextArea = styled.textarea`
  overflow: hidden;
  resize: none;
  max-height: 256px;
  min-height: ${MIN_TEXTAREA_HEIGHT}px;
  width: 100%;
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
  }

  ${({ customStyles }) =>
    customStyles &&
    css`
      ${customStyles}
    `}
`;
