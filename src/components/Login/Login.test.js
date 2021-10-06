import React from "react";
import {render, screen} from '@testing-library/react'
import Login from "./Login";
import {userContext} from '../../context/userContext';


describe("Login", () => {
  const value = {
    user: '',
    login: (name) => this.user = name,
    logout: () => this.user =''
  }
  test("matches snapshot", () => {
    render(  
    <userContext.Provider value={value}>
        <Login />
    </userContext.Provider>);
    expect(screen).toMatchSnapshot();
  });
});
