import { render, screen } from '@testing-library/react';
import MovieDetail from './movie-detail';

describe('<MovieDetail />', () => {
  const mockId = 'ttasdfsdf';
  it('should render correctly', () => {
    render(<MovieDetail id={mockId} />);
    const element = screen.getByTestId('MovieDetail');
    expect(element).toBeTruthy();
  });
});
