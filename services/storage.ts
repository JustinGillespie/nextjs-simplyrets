class LocalStorage {
  isFavorite(propertyKey: string | number): boolean {
    return !!localStorage.getItem(propertyKey.toString());
  }

  setFavorite(propertyKey: string | number) {
    localStorage.setItem(propertyKey.toString(), "true");
  }

  unsetFavorite(propertyKey: string | number) {
    localStorage.removeItem(propertyKey.toString());
  }

  clear() {
    localStorage.clear();
  }
}

const storage = new LocalStorage();
export default storage;
