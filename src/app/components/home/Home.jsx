import React from 'react';
import Vending from 'components/Vending';

function Home() {
  return (
    <div className="container home">
      <h1 className="home__header">Cup of Tea - Machine</h1>
      <Vending />
    </div>
  );
}

export default Home;
