import Favorite from "@/components/favorite/favorite";
import { useState } from "react";
import { storage } from "services";

/**
 * @name favorites-container.tsx
 * @author Justin Gillespie <justin@justingillespie.com>
 *
 * This container is responsible for displaying the favorite
 * icon with the correct state from local storage.
 *
 */

type Props = {
  id: number;
};

export default ({ id }: Props) => {
  const [isFavorite, setIsFavorite] = useState(storage.isFavorite(id));

  const toggleFavorite = () => {
    if (isFavorite) {
      storage.unsetFavorite(id);
      setIsFavorite(false);
    } else {
      storage.setFavorite(id);
      setIsFavorite(true);
    }
  };

  return <Favorite enabled={isFavorite} onClick={toggleFavorite} />;
};
