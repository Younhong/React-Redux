import './App.css';
import React, { Component } from 'react';
import AddNumberRoot from './components/add/AddNumberRoot';
import SubtractNumberRoot from './components/subtract/SubtractNumberRoot';
import DisplayNumberRoot from './components/display/DisplayNumberRoot';
import MultiplyNumberRoot from './components/multiply/MultiplyNumberRoot';
import DivideNumberRoot from './components/divide/DivideNumberRoot';
import RemainderNumberRoot from './components/remainder/RemainderNumberRoot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot />
        <SubtractNumberRoot />
        <MultiplyNumberRoot />
        <DivideNumberRoot />
        <RemainderNumberRoot />
        <DisplayNumberRoot />
      </div>
    )
  }
}

export default App;
