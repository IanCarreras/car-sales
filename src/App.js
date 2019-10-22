import React from 'react';
import { connect } from 'react-redux'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({ additionalPrice, car, additionalFeatures }) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ additionalPrice, car, additionalFeatures}) => {
  return { additionalPrice, car, additionalFeatures }
}

export default connect(mapStateToProps)(App);