import React from "react";
import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom';
import Main from "./Main";
import {userContext} from '../../context/userContext';

describe("Main", () => {
  const value = {
    user: '',
    login: (name) => this.user = name,
    logout: () => this.user =''
  }
  test("matches snapshot", () => {
    render(<BrowserRouter>
            <userContext.Provider value={value}>
              <Main />
            </userContext.Provider>
          </BrowserRouter>);
    expect(screen).toMatchSnapshot();
  });
});
