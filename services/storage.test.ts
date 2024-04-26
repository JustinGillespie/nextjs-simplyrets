import storage from "./storage";

describe("Services: Storage", () => {
  beforeEach(() => storage.clear());

  it("Sets a favorite to localStorage", () => {
    storage.setFavorite(1);
    expect(storage.isFavorite(1)).toEqual(true);
  });

  it("Unsets a favorite to localStorage", () => {
    storage.setFavorite(1);
    expect(storage.isFavorite(1)).toEqual(true);

    storage.unsetFavorite(1);
    expect(storage.isFavorite(1)).toEqual(false);
  });
});
