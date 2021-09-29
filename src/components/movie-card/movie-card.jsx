import { useState } from 'react';
import { Link } from 'react-router-dom';
import Poster from '../../shared/components/poster/poster';

const MovieCard = ({ movie }) => {
  const [isShowPoster, setIsShowPoster] = useState(false);
  const [posterImage, setPosterImage] = useState({});
  const showPoster = image => {
    setIsShowPoster(true);
    setPosterImage(image);
  };

  const closePoster = () => {
    setIsShowPoster(false);
  };

  console.log(movie);

  return (
    <div data-testid="cardMovies">
      <div className="mx-auto my-10 w-full">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="h-full w-full rounded-xl object-cover cursor-pointer"
          onClick={() => showPoster(movie.Poster)}
        />
        <Link to={`/movie/${movie.imdbID}`}>
          <h1 className="text-base font-bold m-2">{movie.Title}</h1>
        </Link>
        <div className="flex flex-row mx-2">
          <span className="font-normal text-sm">{movie.Type}</span>
          <span className="mx-1 -mt-0.5">•</span>
          <p className="font-normal text-sm">{movie.Year}</p>
        </div>
      </div>
      {isShowPoster && <Poster image={posterImage} closePoster={closePoster} />}
    </div>
  );
};

export default MovieCard;
