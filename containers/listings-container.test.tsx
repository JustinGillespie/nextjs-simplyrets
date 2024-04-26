import { render, screen } from "@testing-library/react";
import ListingsContainer from "./listings-container";

describe("Container: Listings", () => {
  it("Renders correctly", () => {
    render(<ListingsContainer />);
    expect(screen.getByTestId("listings"));
  });
});
