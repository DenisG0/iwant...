import React, { Component } from 'react';
import logo from './Cutlery.ico';
import './style.css';
import axios from 'axios'



class App extends Component {

  constructor(){
    super()
    this.getToken=this.getToken.bind(this)
  }

  getToken(){
    axios.get('/token')
    .then( res => res.data)
    .then( info => console.log(info))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">iwant...</h1>
        </header>
        <p className="App-intro">
          What are you craving?
        </p>
        <button onClick = {this.getToken}><h1>Get Token</h1></button>
      </div>
    );
  }
}

export default App;
