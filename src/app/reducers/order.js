import * as types from '../constants/ActionTypes';

const initialState = {
  id: null,
  status: 'PAY',
  item: {}
};

export default function order(state = initialState, action) {
  switch (action.type) {
    case types.PAY:
      return {
        ...state,
        id: '0',
        status: 'CHOOSE'
      };
    case types.CHOOSE:
      return Object.assign({}, state, {
        item: action.item,
        status: 'TAKE'
      });
    case types.TAKE:
      return initialState;

    default:
      return initialState;
  }
}
