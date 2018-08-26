import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavigationComponent.css'

class NavigationComponent extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link className="brand-logo left" to="/">
                    Hair By Vicky
                </Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>          
                        <Link to="/appointments">
                        Appointment
                        </Link>
                    </li>
                    <li>          
                        <Link to="/appointment">
                        Make Appointment
                        </Link>
                    </li>
                </ul>
            </div>
      </nav>
    );
  }
}

export default NavigationComponent;
