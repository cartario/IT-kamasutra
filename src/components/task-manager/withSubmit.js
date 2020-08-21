import React from 'react';

const withSubmit = (Component) => {
  class WithSubmit extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        
      };      
      
    }

    

    render(){
      return <Component 
        {...this.props}
        
      />
    }
  };
  return WithSubmit;
};

export default withSubmit;
