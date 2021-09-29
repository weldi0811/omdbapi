import { useDispatch } from 'react-redux';
import { getMoviesByTitle } from '../../../redux/actions/list.action';

const SearchField = ({ title, setTitle }) => {
  const dispatch = useDispatch();

  const onSearch = value => {
    dispatch(getMoviesByTitle({ title: value, shouldResetResults: true }));
  };

  return (
    <div
      className="flex justify-center align-center"
      data-testid="TxtSearchField">
      <input
        className="text-black w-full border border-green-600 rounded-xl px-5 py-5 mt-5 focus:outline-none"
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
        placeholder="Search"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl ml-8  px-5 py-5 mt-5"
        onClick={() => {
          onSearch(title);
        }}
        data-testid="BtnSearch"
        type="Button">
        Search
      </button>
    </div>
  );
};

export default SearchField;
