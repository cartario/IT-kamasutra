import React from 'react';

const withToggle = (Component) => {
  class WithToggle extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        isShowingCreate: false,
        isShowingFull: false,
        isShowingDelete: false,
      };

      this._toggleCreateHandler = this._toggleCreateHandler.bind(this);
      this._toggleFullHandler = this._toggleFullHandler.bind(this);
      this._toggleDeleteHandler = this._toggleDeleteHandler.bind(this);
      this._toggleHandler = this._toggleHandler.bind(this);    
    }

    _toggleCreateHandler(){
      this.setState({
        isShowingCreate: !this.state.isShowingCreate,
      })
    }

    _toggleFullHandler(){
      this.setState({
        isShowingFull: !this.state.isShowingFull,
      })
    }
  
    _toggleDeleteHandler(){
      this.setState({
        isShowingDelete: !this.state.isShowingDelete,
      })
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
        toggleCreateHandler = {this._toggleCreateHandler}
        toggleFullHandler = {this._toggleFullHandler}
        toggleDeleteHandler = {this._toggleDeleteHandler}
        toggleHandler = {this._toggleHandler}
      />
    }
  };

  return WithToggle;
};

export default withToggle;
