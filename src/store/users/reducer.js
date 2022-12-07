import {
  SAVE_USER_FULLFILLED,
  SAVE_USER_LOADING,
  SAVE_USER_REJECTED,
  RESET_USER,
} from "./types";

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_FULLFILLED:
      return {
        ...state,
        data: action.payload,
        isError: false,
      };

    case SAVE_USER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SAVE_USER_REJECTED:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case RESET_USER:
      return {
        ...state,
        data: [],
        isLoading: false,
        isError: false,
      };

    default:
        return state;
    }
};

export default usersReducer;