import { render, screen } from "@testing-library/react";
import FavoritesContainer from "./favorites-container";

/**
 *
 * TODO: Mock local storage service to finish these tests...
 *
 */

describe("Component: Header", () => {
  it("Renders as the empty variant", () => {
    render(<FavoritesContainer id={1} />);
    expect(screen.getByTestId("favorite-heart-stroke"));
  });
});
