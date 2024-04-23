import s from '../Card/Card.module.css'

export const Card = ({ cat, key, isFavorite, addToFavorites, removeFromFavorites}) => {
  const handleClick = addToFavorites && !isFavorite ? addToFavorites : removeFromFavorites
  return (
    <>
        <li className={s.card__item} key={key}>
            <img className={s.card__img} src={cat.url} alt="Cat" width='225' height='225'/>
            <button className={isFavorite ? `${s.liked}` : `${s.btn}`} type='button' onClick={() => handleClick(cat)}></button>
        </li>
    </>
  )
}
