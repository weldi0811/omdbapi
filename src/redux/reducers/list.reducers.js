import {
  GET_MOVIES_LIST,
  GET_MOVIES_SUCCESS,
} from '../../constants/movieList.const';

const initialState = {
  movieList: [],
  isLoading: false,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        movieList: action.result,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default listReducer;
