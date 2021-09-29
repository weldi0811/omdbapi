import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesByTitle } from '../../redux/actions/list.action';
import SearchField from '../../shared/components/search-field/search-field';
import MovieCard from '../movie-card';

const MovieList = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.movieList.movieList) || [];
  const anchor = useRef();
  const [fetchPerPage, setFetchPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');

  useEffect(() => {
    dispatch(getMoviesByTitle(title, page));

    window.addEventListener('scroll', () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      if (scrolled === scrollable) {
        setFetchPerPage(prev => prev + 5);
        setPage(prev => prev + 1);
      }
    });
  }, [dispatch, title, page]);

  return (
    <>
      <div>
        <SearchField title={title} setTitle={setTitle} />
      </div>
      <div>
        {movieList.length > 0 &&
          movieList.slice(0, fetchPerPage).map((item, index) => {
            return <MovieCard movie={item} key={index} />;
          })}
      </div>
      <div ref={anchor} />
    </>
  );
};

export default MovieList;
