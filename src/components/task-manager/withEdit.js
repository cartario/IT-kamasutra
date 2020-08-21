import React from 'react';

const withEdit = (Component) => {
  class WithEdit extends React.Component{
    constructor(props){
      super(props);
debugger;
      this.state = {
        
      };      
      
    }

    

    render(){
      return <Component 
        {...this.props}
        
      />
    }
  };
  return WithEdit;
};

export default withEdit;
