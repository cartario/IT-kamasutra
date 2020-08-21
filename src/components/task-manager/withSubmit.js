import React from 'react';
import PropTypes from "prop-types";
import {Toggles} from './name-space.js';

const withSubmit = (Component) => {
  class WithSubmit extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        id: 1,
        text: ``,
        isErr: false,
      };      
      this._submitHandler = this._submitHandler.bind(this);	
      this._changeHandler = this._changeHandler.bind(this);
    }

    _submitHandler(e){
      e.preventDefault();
  
      if(!this.state.text){
        this.setState({
          isErr: true,
        })
      } else {			
        this.props.addTask(this.state.text);
        this.setState({
          text: '',
        });
        this.props.toggleHandler(Toggles.CREATE);
      }
    }

    _changeHandler(e){
      this.setState({
        text: e.target.value,
        isErr: false,
      });		
    }

    render(){
      return <Component 
        {...this.props}
        submitHandler = {this._submitHandler}
        changeHandler = {this._changeHandler}
        isErr = {this.state.isErr}
        text = {this.state.text}
        
      />
    }
  };

  WithSubmit.propTypes = {
    addTask: PropTypes.func.isRequired,
    toggleHandler: PropTypes.func.isRequired,
  };

  return WithSubmit;
};

export default withSubmit;
