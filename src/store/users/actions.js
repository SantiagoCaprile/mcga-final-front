import {
    SAVE_USER_FULLFILLED,
    SAVE_USER_LOADING,
    SAVE_USER_REJECTED,
    RESET_USER,
  } from "./types";

export const saveUser = (data) => {
  return {
    type: SAVE_USER_FULLFILLED,
    payload: data,
  };
};

export const saveUserLoading = (isLoading) => {
  return {
    type: SAVE_USER_LOADING,
    payload: isLoading,
  };
};

export const saveUserError = () => {
  return {
    type: SAVE_USER_REJECTED,
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
}