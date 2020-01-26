import { ADD_ITEM, SET_BREAKPOINT } from 'actions/actionTypes';

import pot from 'assets/slider.png';
import table from 'assets/stol.png';
import cellar from 'assets/solniczka.png';
import basket from 'assets/koszyk.png';
import item from 'assets/coś.png';
import speaker from 'assets/glosnik.png';

const initialState = {
  activeItems: [],
  breakPoint: 7,
  items: [
    {
      id: 0,
      width: 's',
      img: pot,
      name: 'Pot',
      price: '12.45',
    },
    {
      id: 1,
      width: 's',
      img: cellar,
      name: 'Cellar',
      price: '5.25',
    },
    {
      id: 2,
      width: 'l',
      img: table,
      name: 'Black table',
      price: '237.99',
    },
    {
      id: 3,
      width: 's',
      img: basket,
      name: 'Basket',
      price: '32.15',
    },
    {
      id: 4,
      width: 's',
      img: item,
      name: 'Something',
      price: '69.69',
    },
    {
      id: 5,
      width: 's',
      img: speaker,
      name: 'Speakers',
      price: '1.45',
    },
    {
      id: 6,
      width: 's',
      img: pot,
      name: 'Pot',
      price: '12.45',
    },
    {
      id: 7,
      width: 's',
      img: pot,
      name: 'Pot',
      price: '12.45',
    },
    {
      id: 8,
      width: 's',
      img: cellar,
      name: 'Cellar',
      price: '5.25',
    },
    {
      id: 9,
      width: 'l',
      img: table,
      name: 'Black table',
      price: '237.99',
    },
    {
      id: 10,
      width: 's',
      img: basket,
      name: 'Basket',
      price: '32.15',
    },
    {
      id: 11,
      width: 's',
      img: item,
      name: 'Something',
      price: '69.69',
    },
    {
      id: 12,
      width: 's',
      img: speaker,
      name: 'Speakers',
      price: '1.45',
    },
    {
      id: 13,
      width: 's',
      img: pot,
      name: 'Pot',
      price: '12.45',
    },
  ],
};

export const storeShop = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        activeItems: [
          ...state.activeItems,
          {
            id: action.id,
          },
        ],
      };
    case SET_BREAKPOINT:
      return {
        ...state,
        breakPoint: state.breakPoint + 7,
      };
    default:
      return state;
  }
};
