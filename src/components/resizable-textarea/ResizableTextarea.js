import React, { useLayoutEffect, useRef } from 'react';
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

export const ResizableTextarea = ({
  name,
  onChange,
  onBlur,
  onKeyDown,
  value,
  customStyles
}) => {
  const textareaRef = useRef();

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = 'inherit';
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
    // Set focus at the end of text
    const len = value.length;
    textareaRef.current.setSelectionRange(len, len);
    textareaRef.current.focus();
  }, [value]);

  return (
    <TextArea
      id={name}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      ref={textareaRef}
      value={value}
      maxLength="65"
      customStyles={customStyles}
    />
  );
};
