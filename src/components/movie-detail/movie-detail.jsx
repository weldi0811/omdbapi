import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Ratings from '../movie-ratings';
import { MOVIE_DATA_DEFAULT_VALUES } from './movie-detail.const';

const MovieDetail = ({ id }) => {
  const [movieData, setMovieData] = useState(MOVIE_DATA_DEFAULT_VALUES);
  const history = useHistory();

  const getMovieDetail = () => {
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
    getMovieDetail();
  }, []);

  return (
    <div data-testid="MovieDetail">
      <main className="px-4">
        <div className="py-10 md:h-screen">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
            onClick={() => {
              history.push('/');
            }}>
            Back
          </button>

          <img
            src={movieData.Poster}
            alt={movieData.Title}
            className="h-100 w-80 mx-auto object-cover rounded-xl"
          />
          <div className="flex align-center justify-center mt-5">
            <h1 className=" font-bold text-2xl my-1 align-center">
              {movieData.Title}
            </h1>
          </div>
          <div className="flex justify-center items-center my-10 md:flex-row ">
            <div className="flex flex-col justify-center align-center md:ml-4 md:w-1/2">
              <div className="flex flex-wrap my-1">
                <h1 className="font-bold text-base">Actors:</h1>
                <span className="mx-1">{movieData.Actors}</span>
              </div>
              <div className="flex flex-wrap my-1">
                <h1 className="font-bold text-base">Directors:</h1>
                <span className="mx-1">{movieData.Director}</span>
              </div>
              <div className="flex flex-wrap my-1">
                {movieData.Ratings.length > 0 && (
                  <>
                    <h1 className="font-bold text-base">Ratings:</h1>
                    <Ratings ratings={movieData.Ratings} />
                  </>
                )}
              </div>
              <div className="flex my-1">
                <h1 className="font-bold text-base">Showing At:</h1>
                <span className="mx-1">{movieData.Country}</span>
              </div>
              <div className="flex my-1">
                <h1 className="font-bold text-base">Type:</h1>
                <span className="mx-1">{movieData.Type}</span>
              </div>
              <div className="flex my-1">
                <h1 className="font-bold text-base">Released:</h1>
                <span className="mx-1">{movieData.Released}</span>
              </div>
              <div className="flex my-1">
                <h1 className="font-bold text-base">Duration:</h1>
                <span className="mx-1">{movieData.Runtime}</span>
              </div>
              <div className="flex my-1">
                <h1 className="font-bold text-base">Genre:</h1>
                <span className="mx-1">{movieData.Genre}</span>
              </div>
              <div className="flex my-1">
                <h1 className="font-bold text-base">Awards:</h1>
                <span className="mx-1">{movieData.Awards}</span>
              </div>
              <div className="flex my-1">
                <h1 className="font-bold text-base">Rated:</h1>
                <span className="mx-1">{movieData.Rated}</span>
              </div>
              <div className="flex my-1">
                <h1 className="font-bold text-base">IMDB Rating:</h1>
                <span className="mx-1">{movieData.imdbRating}</span>
              </div>
              <div className="flex flex-wrap my-1">
                <h1 className="font-bold text-base">Descriptions:</h1>
                <span>{movieData.Plot}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetail;
