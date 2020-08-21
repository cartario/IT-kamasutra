import React from "react";
import PropTypes from "prop-types";

const withActiveTask = (Component) => {
  class WithActiveTask extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        activeTask: null,
      };

      this._setActiveTask = this._setActiveTask.bind(this);
    }

    componentDidMount(){
      this.props.loadTasks();
    } 

    _setActiveTask(task){
      this.setState({
        activeTask: task,
      })
    }

    render(){
      return <Component {...this.props}
      setActiveTask = {this._setActiveTask}
      activeTask = {this.state.activeTask}
      />
    }
  }

  WithActiveTask.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired, 
    loadTasks: PropTypes.func.isRequired,
    isErrorPost: PropTypes.bool.isRequired,
    isAdding: PropTypes.bool.isRequired,
    isDeleting: PropTypes.bool.isRequired,
  };

  return WithActiveTask;
};

export default withActiveTask;
