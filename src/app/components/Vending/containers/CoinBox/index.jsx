import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pay } from 'actions';
import { isDisabled } from 'services/control';

require('./style.scss');

const NAME = 'CoinBox';

/*
  * Here you pay some money to use vending
  * What that can be implemented here:
  * - take different money
  * - give back fakes
  * - pay with credit card
  * - count change amount
  * - take money fore several goods
  */

function CoinBox({
  status,
  onPayClick
  }) {
  return (
    <div>
      <button
        className="vending__button coin-box"
        disabled={isDisabled(NAME, status)}
        onClick={onPayClick}
      >5c
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    status: state.order.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPayClick: () => {
      dispatch(pay());
    }
  };
}

CoinBox.propTypes = {
  status: PropTypes.any.isRequired,
  onPayClick: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinBox);
