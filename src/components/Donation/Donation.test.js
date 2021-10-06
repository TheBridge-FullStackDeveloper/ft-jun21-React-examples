import React from "react";
import {render, screen} from '@testing-library/react'
import Donation from "./Donation";

describe("Donation", () => {
  test("matches snapshot", () => {
    render(<Donation />);
    expect(screen).toMatchSnapshot();
  });
});
