import React from "react";
import { render } from "@testing-library/react";
import Cards from "./Cards";

describe("Cards Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Cards />);
    
    for (let i = 1; i <= 5; i++) {
      const boxElement = getByText(i.toString());
      expect(boxElement).toBeInTheDocument();
    }
  });
});