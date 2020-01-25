import { ADD_ITEM } from 'actions/actionTypes';

import pot from 'assets/slider.png';
import table from 'assets/stol.png';
import cellar from 'assets/solniczka.png';
import basket from 'assets/koszyk.png';
import item from 'assets/coś.png';
import speaker from 'assets/glosnik.png';

const initialState = {
  activeItems: [],
  items: [
    {
      width: 's',
      img: pot,
      name: 'Pot',
      price: '12.45',
    },
    {
      width: 's',
      img: cellar,
      name: 'Cellar',
      price: '5.25',
    },
    {
      width: 'l',
      img: table,
      name: 'Black table',
      price: '237.99',
    },
    {
      width: 's',
      img: basket,
      name: 'Basket',
      price: '32.15',
    },
    {
      width: 's',
      img: item,
      name: 'Something',
      price: '69.69',
    },
    {
      width: 's',
      img: speaker,
      name: 'Speakers',
      price: '1.45',
    },
    {
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
    default:
      return state;
  }
};
