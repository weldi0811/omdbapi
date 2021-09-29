import MovieList from '../components/movie-list/movie-list';
import SearchField from '../shared/components/search-field/search-field';

const Home = () => {
  return (
    <div className="flex justify-center align-center">
      <div className="max-w-6xl">
        <SearchField />
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
