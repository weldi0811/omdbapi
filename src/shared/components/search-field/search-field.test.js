import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store/store';
import SearchField from './search-field';

describe('<SearchField />', () => {
  const mockFunction = jest.fn();
  const mocktitle = 'test';

  it('should render searchfield', () => {
    render(
      <Provider store={store}>
        <SearchField title={mocktitle} setTitle={mockFunction} />
      </Provider>,
    );
    const element = screen.getAllByTestId('TxtSearchField');

    expect(element).toBeTruthy();
  });

  it('should call function when button clicked', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SearchField title={mocktitle} setTitle={mockFunction} />
      </Provider>,
    );

    const searchButton = getByTestId('BtnSearch');
    expect(fireEvent.click(searchButton)).toEqual(true);
  });
});
