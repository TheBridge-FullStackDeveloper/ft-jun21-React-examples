import React, { Component } from "react";
import Nav from "../Nav/Nav";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header--h1">Mi app de comida</h1>
        <Nav/>
      </header>
    )
  }
}

export default Header;
