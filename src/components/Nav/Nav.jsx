import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (         
    <nav className="header--nav">
      <ul>
        <li className="header--nav-element"><Link to="/">Home</Link></li>
        <li className="Header--nav-element"><Link to="/about">About</Link></li>
        <li className="Header--nav-element"><Link to="/staff">Staff</Link></li>
        <li className="Header--nav-element"><Link to="/contact">Contacto</Link></li>
        <li className="Header--nav-element"><Link to="/login">Login</Link></li>
      </ul>
    </nav>);
  }
}

export default Nav;
