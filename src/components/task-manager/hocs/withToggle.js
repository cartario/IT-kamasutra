import React from 'react';
import PropTypes from "prop-types";
import {Toggles} from '../name-space.js';

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

  WithToggle.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    activeTask: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
    loadTasks: PropTypes.func.isRequired,
    setActiveTask: PropTypes.func.isRequired,
    isErrorPost: PropTypes.bool.isRequired,
    isAdding: PropTypes.bool.isRequired,
    isDeleting: PropTypes.bool.isRequired,
  };
  
  return WithToggle;
};

export default withToggle;
