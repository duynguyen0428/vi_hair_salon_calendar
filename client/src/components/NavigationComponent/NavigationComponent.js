import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavigationComponent.css'

class NavigationComponent extends Component {
  render() {
    return (
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">            
                <Link className="py-2 d-none d-md-inline-block" to="/">
                    Home
                </Link>
                <Link className="py-2 d-none d-md-inline-block" to="/appointment">
                    Make Appointment
                </Link>
                <Link className="py-2 d-none d-md-inline-block" to="/appointments">
                Appointment
                </Link>
            </div>
      </nav>
    );
  }
}

export default NavigationComponent;
