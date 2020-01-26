import { ADD_ITEM, SET_BREAKPOINT, OPEN_FILTER, FIND_NAME } from 'actions/actionTypes';

export const addItem = id => {
  return { type: ADD_ITEM, id };
};

export const setBreakpoint = () => {
  return { type: SET_BREAKPOINT };
};

export const openFilter = () => {
  return { type: OPEN_FILTER };
};

export const findName = name => {
  return { type: FIND_NAME, name };
};
