import React, { Component } from 'react';
import './App.css';
import {HelloWorld} from './HelloWorld';
import {Paragraph} from './paragraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        <h1 className="App-title">DevMountain Strech Project 3</h1>
        </header>
        <div><HelloWorld /></div>
        <div><Paragraph /></div>
      </div>
      
    );
  }
}




export default App;
