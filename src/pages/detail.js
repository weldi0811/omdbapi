import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MovieDetail from '../components/movie-detail';

const Detail = () => {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();

  const getMovieData = () => {
    const url = `${process.env.REACT_APP_HOST_API}?apikey=${process.env.REACT_APP_APIKEY}&i=${id}`;

    axios
      .get(url)
      .then(response => {
        setMovieData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return <MovieDetail movieData={movieData} />;
};

export default Detail;
