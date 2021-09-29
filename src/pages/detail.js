import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MovieDetail from '../components/movie-detail';

const Detail = () => {
  const { id } = useParams();

  return <MovieDetail id={id} />;
};

export default Detail;
