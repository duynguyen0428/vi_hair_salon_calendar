import React, { Component } from 'react'
import './HeaderComponent.css'

import NavigationComponent from '../NavigationComponent/NavigationComponent';
export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
            <nav className="site-header sticky-top py-1">
                <NavigationComponent />
            </nav>
        </header>
      </div>
    )
  }
}
