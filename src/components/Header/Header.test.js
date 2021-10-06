import React from "react";
import {render, screen} from '@testing-library/react'
import Header from "./Header";
import {BrowserRouter} from 'react-router-dom';
import {userContext} from '../../context/userContext';
import { ThemeContext } from '../../context/themeContext'

describe("Header", () => {
  const value = {
    user: '',
    login: (name) => this.user = name,
    logout: () => this.user =''
  }

  const theme = {
    theme: '',
    toggleTheme: () => this.theme === "" ? "dark" : ""
  }

  test("matches snapshot", () => {
    render(
      <BrowserRouter>
        <userContext.Provider value={value}>
          <ThemeContext.Provider value={theme}> 
            <Header />
          </ThemeContext.Provider> 
        </userContext.Provider>
      </BrowserRouter>);
    expect(screen).toMatchSnapshot();
  });
});
