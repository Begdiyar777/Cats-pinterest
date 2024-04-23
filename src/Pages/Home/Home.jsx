import { useFetch } from "../../Hooks/useFetch";
import { Card } from "../../components/Card";
import s from '../Pages.module.css'


export function Home({
  favorites,
  addToFavorites,
  removeFromFavorites,
}) {
  const { fetchData, fetching } = useFetch();

  return (
    <div className={s.wrapper}>
      <ul className={s.grid}>
        {fetchData.map((cat, index) => (
          // В качестве ключа используем index так как в данных с API встречаются дубликаты
          <Card
            cat={cat}
            key={index}
            isFavorite={favorites.includes(cat)}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </ul>
      {fetching && <p className={s.loader}>...загружаем котиков...</p>}
    </div>
  );
}

