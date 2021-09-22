import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header--h1">Mi app de comida</h1>
        <nav className="header--nav">
          <li className="header--nav-element">Nosotros</li>
          <li className="Header--nav-element">Home</li>
        </nav>
      </header>
    )
  }
}

export default Header;
