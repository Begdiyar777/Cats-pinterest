import s from './Navbar.module.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <header className={s.header}>
            <div className={s.container}>
            <nav className={s.header__menu}>
                <ul className={s.header__menu_list}>
                    <CustomLink to='/'>Все котики</CustomLink>
                    <CustomLink  to='/favorites'>Любимые котики</CustomLink>
                </ul>
            </nav>
            </div>
        </header>
    </>
  )
}


function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? `${s.active}` : `${s.header__menu_item}`}>
            <Link to={to} className={s.header__menu_link}>{children}</Link>
        </li>
    )
}

