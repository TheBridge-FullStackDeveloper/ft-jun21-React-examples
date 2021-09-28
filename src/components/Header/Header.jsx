import React, { Component } from "react";
import Nav from "../Nav/Nav";

import {userContext} from '../../context/userContext';
import logo from "../../assets/hot-pot.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="hot-pot"/>
        <h1 className="header--h1">Mi app de comida</h1>
        <Nav/>
        <userContext.Consumer>
        {({user,logout}) => 
        
          user.name?           
          <>
            <p>Hola, {user.name}</p>
            <button onClick={()=>logout()}>Logout</button>
          </> :""
        }
        </userContext.Consumer>

      </header>
    )
  }
}

export default Header;
