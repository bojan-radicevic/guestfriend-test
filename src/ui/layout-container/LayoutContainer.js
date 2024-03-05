import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from 'ui/layout-container/styles';

export const LayoutContainer = () => (
  <Layout>
    <Outlet />
  </Layout>
);
