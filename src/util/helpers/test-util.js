import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { store } from 'store/store';
import i18n from 'app/i18n';

const customRender = (ui, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <DragDropContext>{children}</DragDropContext>
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// Re-export everything from testing-library/react
export * from '@testing-library/react';

// Override render method
export { customRender as render };
