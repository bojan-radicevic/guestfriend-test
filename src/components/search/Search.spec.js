import { render, screen, fireEvent } from 'util/helpers/test-util';

import i18n from 'app/i18n';

import { SearchInput } from 'components/search/Search';

describe('Search component', () => {
  it('should render a search input field with a search icon', () => {
    render(<SearchInput />);

    const searchInput = screen.getByRole('textbox');
    const searchIcon = screen.getByTestId('search-icon');

    expect(searchInput).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });
});
