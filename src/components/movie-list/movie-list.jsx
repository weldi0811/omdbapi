import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieList } from '../../redux/actions/list.action';
import MovieCard from '../movie-card';

const MovieList = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.movieList.movieList) || [];

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  return (
    <div>
      {movieList.length > 0 &&
        movieList.map((item, index) => {
          return <MovieCard movie={item} key={index} />;
        })}
    </div>
  );
};

export default MovieList;
