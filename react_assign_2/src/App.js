import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    length: 0,
    input:''
  }
  inputChangeHandler = (event) => { 
    this.setState({
      length:event.target.value.length,
      input:event.target.value
    })
    
  }
  removeElement= (index)=> {
    const inputArr = this.state.input.split('');
    inputArr.splice(index,1);
    this.setState({input: inputArr.join(''),
    length:inputArr.length
  })
  
  }
  
  render() {
  const style = {
    border:"2px solid black",
    margin:"20px",
    padding:"5px"
  };


  const charList = this.state.input.split('').map((c,index) =>{
    return <CharComponent Char ={c} key={index} Remove={()=>{this.removeElement(index)}}/>
  })


  return (
      <div className="App">
        <input type="text" style = {style} onChange = {this.inputChangeHandler} />
        <p>{this.state.length}</p>
        <ValidationComponent InputLength = {this.state.length}/>
        {
          charList
        }
        
      </div>
    );
  }
}

export default App;
