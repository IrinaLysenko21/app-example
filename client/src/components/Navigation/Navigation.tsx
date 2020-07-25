import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import s from './Navigation.module.scss';

const Navigation = () => {
  const activeStyle = {
    color: '#67d69f',
  };

  return (
    <nav>
      <ul className={s.nav}>
        <li className={s.nav__item}>
          <NavLink
            exact
            to={routes.MAIN_PAGE.path}
            activeStyle={activeStyle}
            className={s.nav__link}
          >
            Main
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink
            to={routes.NOTEPAD_PAGE.path}
            activeStyle={activeStyle}
            className={s.nav__link}
          >
            Notepad
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink
            to={routes.ARTICLES_PAGE.path}
            activeStyle={activeStyle}
            className={s.nav__link}
          >
            Articles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
