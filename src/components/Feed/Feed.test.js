import React from "react";
import {render, screen} from '@testing-library/react'
import Feed from "./Feed";

describe("Feed", () => {
  test("matches snapshot", () => {
    render(<Feed />);
    expect(screen).toMatchSnapshot();
  });
});
