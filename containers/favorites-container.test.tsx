import { render, screen } from "@testing-library/react";
import { storage } from "services";
import FavoritesContainer from "./favorites-container";

describe("Component: Favorite", () => {
  beforeEach(() => storage.clear());

  it("Renders as the stroke variant", () => {
    render(<FavoritesContainer id={1} />);
    expect(screen.getByTestId("favorite-heart-stroke"));
  });

  it("Renders as the filled variant", () => {
    storage.setFavorite(1);
    render(<FavoritesContainer id={1} />);
    expect(screen.getByTestId("favorite-heart-fill"));
  });
});
