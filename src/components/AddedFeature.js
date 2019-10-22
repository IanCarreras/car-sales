import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'

const AddedFeature = props => {
  const { actions, feature } = props
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => actions.removeFeature(feature)}>X</button>
      {feature.name}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddedFeature);