import React from 'react';
import {Toggles} from './name-space.js';

const withToggle = (Component) => {
  class WithToggle extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        [Toggles.CREATE]: false,
        [Toggles.EDIT]: false,
        [Toggles.DELETE]: false,
      };      
      this._toggleHandler = this._toggleHandler.bind(this);    
    }

    _toggleHandler(name){
      this.setState({
        [name]: !this.state[name],
      })
    }

    render(){
      return <Component 
        {...this.props}
        statusCard = {this.state}       
        toggleHandler = {this._toggleHandler}
      />
    }
  };
  return WithToggle;
};

export default withToggle;
