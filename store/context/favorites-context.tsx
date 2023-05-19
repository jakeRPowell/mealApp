import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavoriteHandler(id: string) {
    console.log(favoriteMealIds);
    setFavoriteMealIds((prevFavoriteMealIds) => [...prevFavoriteMealIds, id]);
  }

  function removeFavoriteHandler(id: string) {
    console.log(favoriteMealIds);
    setFavoriteMealIds((prevFavoriteMealIds) =>
      prevFavoriteMealIds.filter((i) => i !== id)
    );
  }

  const context = {
    ids: favoriteMealIds,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
