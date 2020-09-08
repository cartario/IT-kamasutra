import React from 'react';
import axios from "axios";

class Express extends React.Component {
  constructor(props){
    super(props);

    this.state={
      data: [],
      input: ``,
    };
  }

  componentDidMount() {
   axios.get('https://calm-savannah-27762.herokuapp.com/artists').then((res)=>{
     this.setState({data: res.data})
   });
  }

  render() {
    const data = this.state.data;    
    return (
      <>
        <h1>Сервачок</h1>
        <div style={{display: 'flex'}}>
          {data.length ? JSON.stringify(data,null,2): <p>Нет данных</p>}          
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          axios.put('https://calm-savannah-27762.herokuapp.com/artists/1', {name: this.state.input});
        }}>
          <input value={this.state.input} onChange={(e)=>{this.setState({input: e.target.value})}} type="text"/>
          <button onClick={()=>console.log(`click`)} type="submit">Send</button>
        </form>
      </>
    );
  }
} ;

export default Express;
