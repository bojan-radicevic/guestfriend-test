import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.main`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`;

export const App = () => (
  <LayoutContainer>
    <Outlet />
  </LayoutContainer>
);
