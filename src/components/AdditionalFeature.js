import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'

const AdditionalFeature = props => {
  const { actions, feature } = props
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => actions.addFeature(feature)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AdditionalFeature);