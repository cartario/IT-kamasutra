import React from "react";

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

  return WithActiveTask;
};

export default withActiveTask;
