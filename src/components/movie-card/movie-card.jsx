import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Poster from '../../shared/components/poster/poster';

const MovieCard = ({ movie }) => {
  const history = useHistory();

  const [isShowPoster, setIsShowPoster] = useState(false);
  const [posterImage, setPosterImage] = useState({});
  const showPoster = image => {
    setIsShowPoster(true);
    setPosterImage(image);
  };

  const closePoster = () => {
    setIsShowPoster(false);
  };

  return (
    <div data-testid="MovieCard">
      <div className="mx-auto my-10 w-full">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="h-full w-full rounded-xl object-cover cursor-pointer"
          onClick={() => showPoster(movie.Poster)}
          data-testid="ImgPoster"
        />
        <div
          className="cursor-pointer"
          onClick={() => {
            history.push(`/movie/${movie.imdbID}`);
          }}>
          <h1 className="text-base font-bold m-2">{movie.Title}</h1>
        </div>
        <div className="flex flex-row mx-2">
          <span className="text-sm">{movie.Type} | </span>
          <p className="ml-2 text-sm">{movie.Year}</p>
        </div>
      </div>
      {isShowPoster && <Poster image={posterImage} closePoster={closePoster} />}
    </div>
  );
};

export default MovieCard;
