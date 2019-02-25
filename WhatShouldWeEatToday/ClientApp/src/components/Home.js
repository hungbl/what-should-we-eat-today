import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/action';
import Wheel from './wheel';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container">
        <Wheel/>
      </div>
    );
  }
}

function mapStateToProps (state){
  const {reducerSpin} = state;
  return {reducerSpin};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )(Home)
