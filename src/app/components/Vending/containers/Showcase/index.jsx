import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { CUP_OF_TEA } from 'constants/Config';

require('./style.scss');

/*
 * Show our goods
 * What that can be implemented here:
 * - process item type count to feat the screen nicely
 * - chow placeholders while loading goods
 * - highlight the type of the selected item
 */

function Showcase({
  goods
  }) {
  return (
    <div className="goods rounded">
      {
        goods.map(good => (
          <div key={`goods${good.id}`} className={`${good.style} goods__item`}>
            {CUP_OF_TEA}
          </div>
        ))
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    goods: state.goods.goods
  };
}

Showcase.defaultProp = {
  goods: []
};

Showcase.propTypes = {
  goods: PropTypes.array
};

export default Showcase = connect(
  mapStateToProps
)(Showcase);

