import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">第一次学习react</h1>
        </header>
        <p className="App-intro">
          代码在<code>src/App.js</code>文件中修改
        </p>
      </div>
    );
  }
}

export default App;
