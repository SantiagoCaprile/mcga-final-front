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

export const saveMatch = (data) => {
  return {
    type: SAVE_MATCH_FULLFILLED,
    payload: data,
  };
};

export const saveMatchLoading = (isLoading) => {
  return {
    type: SAVE_MATCH_LOADING,
    payload: isLoading,
  };
};

export const saveMatchError = () => {
  return {
    type: SAVE_MATCH_REJECTED,
  };
};

export const addMatch = (data) => {
  return {
    type: ADD_MATCH_FULLFILLED,
    payload: data,
  };
};

export const addMatchLoading = (isLoading) => {
  return {
    type: ADD_MATCH_LOADING,
    payload: isLoading,
  };
};

export const addMatchError = () => {
  return {
    type: ADD_MATCH_REJECTED,
  };
};

export const editMatch = (data) => {
  return {
    type: EDIT_MATCH_FULLFILLED,
    payload: data,
  };
};

export const editMatchLoading = (isLoading) => {
  return {
    type: EDIT_MATCH_LOADING,
    payload: isLoading,
  };
};

export const editMatchError = () => {
  return {
    type: EDIT_MATCH_REJECTED,
  };
};

export const deleteMatch = (id) => {
  return {
    type: DELETE_MATCH_FULLFILLED,
    payload: id,
  };
};

export const deleteMatchLoading = (isLoading) => {
  return {
    type: DELETE_MATCH_LOADING,
    payload: isLoading,
  };
};

export const deleteMatchError = () => {
  return {
    type: DELETE_MATCH_REJECTED,
  };
};