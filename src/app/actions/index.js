import * as types from '../constants/ActionTypes';

// We can add goods fetch here and order processing through the back end

export function pay() {
  return {
    type: types.PAY
  };
}

export function choose(item) {
  return {
    type: types.CHOOSE,
    item
  };
}

export function takeTea(id) {
  return {
    type: types.TAKE,
    id
  };
}
