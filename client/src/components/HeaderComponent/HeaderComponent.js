import React, { Component } from 'react'
import './HeaderComponent.css'

import NavigationComponent from '../NavigationComponent/NavigationComponent';
export default class HeaderComponent extends Component {
  render() {
    return (
        <header>
            <NavigationComponent />
        </header>
    )
  }
}
