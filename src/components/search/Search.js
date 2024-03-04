import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import { searchTasks } from 'store/board/boardSlice';

import { ReactComponent as SearchIcon } from 'assets/icons/search_icon.svg';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  width: 736px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px 12px 8px 32px;
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
  font-size: 16px;
  width: 346px;
  margin-left: auto;

  &:focus {
    border-color: #0096e0;
  }
`;

const Search = styled(SearchIcon)`
  position: absolute;
  left: 8px;
  width: 24px;
  height: 24px;
`;

const Error = styled.span`
  display: flex;
  align-items: center;
  color: red;
  height: 24px;
`;

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [hasError, setHasError] = useState(false);

  const searchHandler = searchTerm => {
    if (searchTerm && searchTerm?.length < 2) {
      setHasError(true);
    }

    dispatch(searchTasks({ searchTerm }));
  };

  const searchHandlerDebounce = useCallback(debounce(searchHandler, 500), []);

  useEffect(() => {
    searchHandlerDebounce(searchTerm);

    return () => {
      searchHandlerDebounce.cancel();
    };
  }, [searchTerm]);

  const onChange = event => {
    if (hasError) {
      setHasError(false);
    }

    setSearchTerm(event.target.value);
  };

  return (
    <Wrapper>
      <Container>
        <Search />
        <Input type="text" onChange={onChange} />
      </Container>
      <Error>
        {hasError ? 'Search term has to be longer than 1 character!' : ''}
      </Error>
    </Wrapper>
  );
};
