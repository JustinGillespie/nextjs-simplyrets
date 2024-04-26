/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../pages/listings/index";

describe("Listings page", () => {
  it("renders the global header", () => {
    render(<Page />);
    const heading = screen.getByTestId("global-header");
    expect(heading).toBeInTheDocument();
  });

  it("renders the listing container component", () => {
    render(<Page />);
    const listingsContainer = screen.getByTestId("listings");
    expect(listingsContainer).toBeInTheDocument();
  });

  it("renders listing page unchanged", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
