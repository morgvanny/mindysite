import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <h1 className="App-title">Mindy Furano</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
