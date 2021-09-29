import MovieList from '../components/movie-list/movie-list';

const Home = () => {
  return (
    <div className="flex justify-center align-center">
      <div className="max-w-6xl">
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
