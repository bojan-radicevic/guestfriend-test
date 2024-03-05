import styled, { css } from 'styled-components';

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
  border: 1px solid transparent;
  border-radius: 2px;
  outline: none;
  font-size: 16px;
  width: 24px;
  margin-left: auto;
  transition: all 0.5s;

  &:focus {
    border-color: #b9c3cc;
  }

  ${({ $hover }) =>
    $hover &&
    css`
      width: 288px;
      border-color: #b9c3cc;
    `}
`;

const Search = styled(SearchIcon)`
  position: absolute;
  left: 8px;
  width: 24px;
  height: 24px;
  transition: all 0.5s;
  transform: scale(1.5);

  path {
    fill: ${({ $searchTerm }) => ($searchTerm ? '#f70058' : '#000')};
  }

  ${({ $hover }) =>
    $hover &&
    css`
      transform: scale(1);

      path {
        fill: #000;
      }
    `}
`;

export { Wrapper, Container, Input, Search };
