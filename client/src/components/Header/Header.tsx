import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Navigation from '../Navigation/Navigation';
import routes from '../../routes/routes';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__contentWrap}>
          <h1 className={s.logo}>
            My<span className={s.logo__capital}>S</span>pase
          </h1>
          <Navigation />
          <Link to={routes.ACCOUNT_PAGE.path} className={s.nav__link}>
            <i className={cn('las la-user', s.accountLink)}></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
