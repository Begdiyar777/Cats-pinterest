import { useState, useEffect } from "react";

export function usePreferences() {
  const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
  const [favorites, setFavorites] = useState(saved);

  //Добавление в любимые
  const addToFavorites = (cat) => {
    if (favorites.includes(cat)) return;
    setFavorites([...favorites, cat]);
  };
  // Удаление из Любимых
  const removeFromFavorites = (cat) => {
    const filtered = favorites.filter((item) => item !== cat);
    setFavorites(filtered);
  };

  useEffect(() => {
    localStorage.favorites = JSON.stringify(favorites);
  }, [favorites]);

  return {
    favorites: favorites,
    addToFavorites: addToFavorites,
    removeFromFavorites: removeFromFavorites,
  };
}
