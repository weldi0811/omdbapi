import { GET_MOVIES_LIST } from '../../constants/movieList.const';

const initialState = {
  movieList: [],
  isLoading: false,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return {
        movieList: action.result,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default listReducer;
