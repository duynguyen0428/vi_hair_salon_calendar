import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import MainContent from './MainContentComponent/MainContent';
import NavigationComponent from './NavigationComponent/NavigationComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav className="site-header sticky-top py-1">
          <NavigationComponent />
        </nav>
        </header>
          <div >
          <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
