import { useContext } from "react";
import Nav from "../Nav/Nav";
import Button from '@mui/material/Button';

import {userContext} from '../../context/userContext';
import { ThemeContext } from '../../context/themeContext';

import logo from "../../assets/hot-pot.png";

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext) // Context con Hooks
  console.log("Color recibido: "+theme);
  return (
    <header className= {`header ${theme}`}>
      <img src={logo} alt="hot-pot"/>
      <div className="header-title">
      <h1 className="header--h1">Mi app de comida</h1>
      <Nav theme={theme}/>
      <Button onClick={toggleTheme}>Cambia</Button>
      </div>
      <userContext.Consumer>
      {({user,logout}) => 
      
        user.name?           
        <>
          <p>Hola, {user.name}</p>
          <Button onClick={logout}>Logout</Button>
        </> :""
      }
      </userContext.Consumer>

  </header>
  )
}

export default Header

