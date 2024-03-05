import React, { useState, useEffect, useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { searchTasks } from 'store/board/boardSlice';

import { Error } from 'styles/error';
import { Container, Input, Search, Wrapper } from 'components/search/styles';

export const SearchInput = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const targetRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  const searchHandler = searchTerm => {
    if (searchTerm && searchTerm?.length < 2) {
      setHasError(true);
    }

    dispatch(searchTasks({ searchTerm }));
  };

  const searchHandlerDebounce = useCallback(debounce(searchHandler, 300), []);

  useEffect(() => {
    searchHandlerDebounce(searchTerm);

    return () => {
      searchHandlerDebounce.cancel();
    };
  }, [searchTerm]);

  useEffect(() => {
    if (showSearchInput) {
      // Set focus at the end of text
      const len = searchTerm?.length;
      targetRef.current.setSelectionRange(len, len);
      targetRef.current.focus();
    }
  }, [showSearchInput]);

  const onChange = event => {
    if (hasError) {
      setHasError(false);
    }

    setSearchTerm(event.target.value);
  };

  return (
    <Wrapper>
      <Container
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <Search
          $hover={showSearchInput}
          $searchTerm={searchTerm}
          data-testid="search-icon"
        />
        <Input
          type="text"
          onChange={onChange}
          $hover={showSearchInput}
          ref={targetRef}
        />
      </Container>
      <Error>
        {hasError ? t('errors.insufficient_length', { count: 1 }) : ''}
      </Error>
    </Wrapper>
  );
};
