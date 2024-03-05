import React, { useLayoutEffect, useRef } from 'react';

import { MIN_TEXTAREA_HEIGHT } from 'util/constants/defaultValues';

import { TextArea } from 'components/resizable-textarea/styles';

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
    // Reset height - important to shrink back to initial size
    // on a deleting text
    textareaRef.current.style.height = 'inherit';
    // Change height on typing when the bottom of textarea is reached
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
      customStyles={customStyles}
    />
  );
};
