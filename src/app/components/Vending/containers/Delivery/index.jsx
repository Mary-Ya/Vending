import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { takeTea } from 'actions';
import { isDisabled } from 'services/control';

require('./style.scss');

const NAME = 'Delivery';

/*
 * Here we can take our tea (in this case)
 * What that can be implemented here:
 * - cup-like take button
 * - animation
 */

function Delivery({
  status,
  classes,
  onTake
  }) {
  return (
    <div className="delivery rounded">
      <button
        key="cut_of_tea"
        className={classes}
        disabled={isDisabled(NAME, status)}
        onClick={() => { onTake('PAY'); }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    status: state.order.status,
    classes: cx(`cup-of-tea vending__button ${state.order.item.style}`)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTake: (status) => {
      dispatch(takeTea(status));
    }
  };
}

Delivery.propTypes = {
  status: PropTypes.string.isRequired,
  classes: PropTypes.any,
  onTake: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Delivery);
