import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { choose } from 'actions';

import { CUP_OF_TEA } from 'constants/Config';
import { isDisabled } from 'services/control';

require('./style.scss');

const NAME = 'Choose';

/*
 * Here we can choose goods to take
 * What that can be implemented here:
 * - check if product is available
 * - check additional options (sugar, milk)
 * - multi product choose
 * - choose undo
 * - money back control
 * - check if there are enough money paid
 * */

function ChooseButtons({
  goodsTypes,
  onChoose,
  status
  }) {
  return (
    <div className="choose-buttons">
      {goodsTypes ? goodsTypes.map(item => (
        <button
          key={`goodsSelector${item.id}`}
          className={`${item.style} choose-buttons__item vending__button`}
          disabled={isDisabled(NAME, status)}
          onClick={() => { onChoose(item); }}
        >
          {CUP_OF_TEA}
        </button>
      )) : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    goodsTypes: state.goods.goodsTypes,
    status: state.order.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChoose: (item) => {
      dispatch(choose(item));
    }
  };
}

ChooseButtons.propTypes = {
  goodsTypes: PropTypes.array.isRequired,
  onChoose: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

ChooseButtons.defaultProp = {
  goodsTypes: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseButtons);
