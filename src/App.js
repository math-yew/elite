import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import Edit from './components/Edit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products />
        <Edit />
      </div>
    );
  }
}

export default App;
