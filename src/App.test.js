import { render, screen } from '@testing-library/react';

import { App } from 'App';

test('App Component renders without crashing', () => {
  render(<App />);
});
