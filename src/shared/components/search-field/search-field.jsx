import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesByTitle } from '../../../redux/actions/list.action';

const SearchField = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const onSearchFieldChange = value => {
    setTitle(value);
    dispatch(getMoviesByTitle(value));
  };

  return (
    <div>
      <input
        className="text-black w-full border border-green-600 rounded-xl px-5 py-5 mt-5 focus:outline-none"
        type="text"
        value={title}
        onChange={event => onSearchFieldChange(event.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchField;
