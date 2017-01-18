import { GOODS_LIST, GOODS_TYPES } from '../constants/Config';

import * as types from '../constants/ActionTypes';

const initialState = {
  goods: GOODS_LIST,
  goodsTypes: GOODS_TYPES
};

export default function goods(state = initialState, action) {
  switch (action.type) {
    case types.SET_GOODS:
      return {
        ...state
      };
    case types.SET_GOODS_TYPES:
      return {
        ...state
      };
    default:
      return initialState;
  }
}
