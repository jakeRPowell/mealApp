import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: ['m1'],
  addTofavorites: (id: string) => {},
  removeFromfavorites: (id: string) => {},
  mealIsFavourite: (id: string) => {},
});

function FavoritesContextProvider({ children }: any) {
  const [ids, setIds] = useState<string[]>([]);

  const addTofavorites = (id: string) => {
    setIds((currentIds) => [...currentIds, id]);
  };

  const removeFromfavorites = (id: string) => {
    setIds((currentIds) => currentIds.filter((i) => i !== id));
  };

  const mealIsFavourite = (id: string) => {
    return ids.indexOf(id) !== -1;
  };

  const contextValues = {
    ids: ids,
    addTofavorites: addTofavorites,
    removeFromfavorites: removeFromfavorites,
    mealIsFavourite: mealIsFavourite,
  };

  return (
    <FavoritesContext.Provider value={contextValues}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
