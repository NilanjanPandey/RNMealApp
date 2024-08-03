import { createContext, useState } from "react";
export const FavouriteContext = createContext({
  _id: [],
  _addFavourite: (id) => {},
  _removeFavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteIds, setFavouriteIds] = useState([]);
  function addFavourite(id) {
    
    setFavouriteIds((previousIds) => [...previousIds, id]);
  }
  function removeFavourite(id) {
    
    setFavouriteIds((previousId) =>
      previousId.filter((mealId) => mealId !== id)
    );
  }
  const contextValue = {
    _id: favouriteIds,
    _addFavourite: addFavourite,
    _removeFavourite: removeFavourite,
  };
  return <FavouriteContext.Provider value={contextValue}>{children}</FavouriteContext.Provider>;
}

export default FavouriteContextProvider;
