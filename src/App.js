import './App.css';

import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './styles/styles.scss'

import {userContext} from './context/userContext';
import { ThemeContext } from './context/themeContext'



export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        name:""
      },
      theme:""
    }
  }

  login = (name) => this.setState({user:{name}})

  logout = () => this.setState({user:{name:""}})

  toggleTheme = ()=> this.state.theme?console.log("modo dia"):console.log("modo noche")
  

  render() {
    const value = {
      user: this.state.user,
      login: this.login,
      logout: this.logout
    }

    const theme = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme
    }

    return (
      <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
        <ThemeContext.Provider value={theme}> 
          <Header/>
          <Main/>
        </ThemeContext.Provider>
        </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
    )
  }
}

export default App