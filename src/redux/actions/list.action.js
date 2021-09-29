import axios from 'axios';
import {
  GET_MOVIES_BY_TITLE,
  GET_MOVIES_ERROR,
  GET_MOVIES_LIST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_SUCCESS_AND_RESET_RESULT,
} from '../../constants/movieList.const';

export const getMovie = () => {
  return {
    type: GET_MOVIES_LIST,
  };
};

export const getMovieSuccess = result => {
  return {
    type: GET_MOVIES_SUCCESS,
    result,
  };
};

export const getMovieError = error => {
  return {
    type: GET_MOVIES_ERROR,
    error,
  };
};

export const getMovieByTitle = title => {
  return {
    type: GET_MOVIES_BY_TITLE,
  };
};

export const getMovieList = () => {
  return function (dispatch) {
    const initialUrl = `${process.env.REACT_APP_HOST_API}?apikey=${process.env.REACT_APP_APIKEY}&s=Harry potter&page=1`;
    dispatch(getMovie());
    axios
      .get(initialUrl)
      .then(response =>
        !!response.data.Search
          ? dispatch({
              type: GET_MOVIES_SUCCESS,
              payload: response.data.Search,
            })
          : dispatch(getMovieSuccess([])),
      )
      .catch(error => dispatch(getMovieError(error)));
  };
};

export const getMoviesByTitle = ({ title, page = 1, shouldResetResults }) => {
  return function (dispatch) {
    const url = `${process.env.REACT_APP_HOST_API}?apikey=${process.env.REACT_APP_APIKEY}&s=${title}&page=${page}`;
    const actionType = shouldResetResults
      ? GET_MOVIES_SUCCESS_AND_RESET_RESULT
      : GET_MOVIES_SUCCESS;

    axios
      .get(url)
      .then(response =>
        !!response.data.Search
          ? dispatch({
              type: actionType,
              payload: response.data.Search,
            })
          : dispatch({
              type: actionType,
              payload: [],
            }),
      )
      .catch(error => dispatch(getMovieError(error)));
  };
};
