import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { MAIN_URLS } from 'util/routes/urls';

import { LayoutContainer } from 'ui/layout-container/LayoutContainer';
import { Board } from 'pages/board/Board';

export const Router = () => {
  return (
    <Routes>
      <Route element={<LayoutContainer />}>
        <Route path={MAIN_URLS.ROOT} element={<Board />} />
      </Route>
      <Route path="*" element={<Navigate to={MAIN_URLS.ROOT} />} />
    </Routes>
  );
};
