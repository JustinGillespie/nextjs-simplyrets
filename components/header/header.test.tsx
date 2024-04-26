import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Component: Header", () => {
  it("Renders with a title", () => {
    render(<Header title="Header title" />);
    expect(screen.getByTestId("global-header")).toHaveTextContent(
      "Header title",
    );
  });
});
