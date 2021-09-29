import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from './movie-card';

describe('<MovieCard />', () => {
  it('should render movie card', () => {
    render(<MovieCard movie={{}} />);
    const element = screen.getByTestId('MovieCard');
    expect(element).toBeTruthy();
  });

  it('should call function when ImgPoster clicked', () => {
    const { getByTestId } = render(<MovieCard movie={{}} />);
    const imgPoster = getByTestId('ImgPoster');
    expect(fireEvent.click(imgPoster)).toEqual(true);
  });
});
