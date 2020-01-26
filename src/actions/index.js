import { ADD_ITEM, SET_BREAKPOINT } from 'actions/actionTypes';

export const addItem = id => {
  return { type: ADD_ITEM, id };
};

export const setBreakpoint = () => {
  return { type: SET_BREAKPOINT };
};
