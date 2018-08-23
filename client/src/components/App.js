import React, { Component } from 'react';
import './App.css';


import MainContent from './MainContentComponent/MainContent';
import {BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <MainContent />
          </Router>
      </div>
    );
  }
}

export default App;
