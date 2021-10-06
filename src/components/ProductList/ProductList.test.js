import React from "react";
import {render, screen} from '@testing-library/react'
import ProductList from "./ProductList";
import {userContext} from '../../context/userContext';

describe("ProductList", () => {
  const value = {
    user: '',
    login: (name) => this.user = name,
    logout: () => this.user =''
  }

  test("matches snapshot", () => {
    render(<userContext.Provider value={value}>
            <ProductList />
          </userContext.Provider>);
    expect(screen).toMatchSnapshot();
  });
});
