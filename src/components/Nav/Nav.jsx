import React, { Component } from "react";

class Nav extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <nav className={this.props.clase}>
        <ul className="nav--ul">
          <li>About Us</li>
          <li>Home</li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
