import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { HEALP_TEXT_ON_STATUS } from 'constants/Config';

require('./style.scss');

/*
* Help Text provide hints for every order state
* What that can be implemented here:
* - show balloons near component, where user should act
* - voice-over
* - more screen-like screen
*/

function Vending({
  status
  }) {
  return (
    <h3 className="help-text rounded">
      {HEALP_TEXT_ON_STATUS[status].helpText}
    </h3>
  );
}

function mapStateToProps(state) {
  return {
    status: state.order.status
  };
}

Vending.defaultProps = {
  status: ''
};

Vending.propTypes = {
  status: PropTypes.string
};

export default connect(
  mapStateToProps
)(Vending);
