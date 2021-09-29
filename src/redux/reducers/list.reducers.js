import {
  GET_MOVIES_BY_TITLE,
  GET_MOVIES_LIST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_SUCCESS_AND_RESET_RESULT,
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
        movieList: [...state.movieList, ...action.payload],
        isLoading: false,
      };

    case GET_MOVIES_SUCCESS_AND_RESET_RESULT:
      return {
        movieList: action.payload,
        isLoading: false,
      };

    case GET_MOVIES_BY_TITLE:
      return {
        movieList: action.result,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default listReducer;
