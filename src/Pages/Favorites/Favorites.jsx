import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import s from '../Pages.module.css'


export function Favorites({ favorites, removeFromFavorites }) {
  return (
    <div className={s.wrapper}>
      {favorites.length ? (
        <div className={s.grid}>
          {favorites.map((cat) => (
            <Card
              cat={cat}
              key={cat.id}
              isFavorite={true}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      ) : (
        <div className={s.empty}>
          <p>
            К сожалению вы еще не нашли своих любимых котиков 😥. Поэтому
            предлагаю вам перейти по ссылке ниже
          </p>
          <p>
            <Link className={s.btn} to="/">
              Все котики
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

