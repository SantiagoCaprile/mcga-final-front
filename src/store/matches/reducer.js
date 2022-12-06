import {
  SAVE_MATCH_FULLFILLED,
  SAVE_MATCH_LOADING,
  SAVE_MATCH_REJECTED,
  ADD_MATCH_FULLFILLED,
  ADD_MATCH_LOADING,
  ADD_MATCH_REJECTED,
  EDIT_MATCH_FULLFILLED,
  EDIT_MATCH_LOADING,
  EDIT_MATCH_REJECTED,
  DELETE_MATCH_FULLFILLED,
  DELETE_MATCH_LOADING,
  DELETE_MATCH_REJECTED,
} from "./types";

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false,
};

const matchesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_MATCH_FULLFILLED:
      return {
        ...state,
        data: action.payload,
        isError: false,
      };

    case SAVE_MATCH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SAVE_MATCH_REJECTED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case ADD_MATCH_FULLFILLED:
      return {
        ...state,
        data: [...state.data, action.payload],
        isError: false,
      };

    case ADD_MATCH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ADD_MATCH_REJECTED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case EDIT_MATCH_FULLFILLED:
      return {
        ...state,
        data: state.data.map((match) => {
          if (match._id === action.payload._id) {
            return action.payload;
          }
          return match;
        }),
        isError: false,
      };

    case EDIT_MATCH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case EDIT_MATCH_REJECTED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case DELETE_MATCH_FULLFILLED: {
      return {
        ...state,
        data: state.data.filter((match) => match._id !== action.payload),
        isError: false,
      };
    }

    case DELETE_MATCH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case DELETE_MATCH_REJECTED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default matchesReducer;