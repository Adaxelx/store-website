import { ADD_ITEM } from 'actions/actionTypes';

export const addItem = id => {
  return { type: ADD_ITEM, id };
};
