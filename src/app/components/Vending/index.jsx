import React from 'react';

import CoinBox from './containers/CoinBox';
import ChooseButtons from './containers/CooseButtons';
import Delivery from './containers/Delivery';
import HelpText from './containers/HelpText';
import Showcase from './containers/Showcase';

require('./vending.scss');

class VendingComponent extends React.PureComponent {
  render() {
    return (
      <div className="vending rounded">
        <HelpText />
        <div className="vending__controls rounded">
          <CoinBox />
          <ChooseButtons />
        </div>
        <div className="vending__mechanism">
          <Showcase />
          <Delivery />
        </div>
      </div>
    );
  }
}

export default VendingComponent;
