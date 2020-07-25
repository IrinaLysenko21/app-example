import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import routes from '../../routes/routes';
import * as notepadOperations from '../../redux/notepad/notepadOperations';
import s from './MainLayout.module.scss';

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notepadOperations.getNotes());
  }, [dispatch]);

  return (
    <div className={s.layout}>
      <Header />
      <Switch>
        <Route
          exact
          path={routes.MAIN_PAGE.path}
          component={routes.MAIN_PAGE.component}
        />
        <Route
          path={routes.NOTEPAD_PAGE.path}
          component={routes.NOTEPAD_PAGE.component}
        />
        <Route
          path={routes.ARTICLES_PAGE.path}
          component={routes.ARTICLES_PAGE.component}
        />
        <Route
          path={routes.ACCOUNT_PAGE.path}
          component={routes.ACCOUNT_PAGE.component}
        />

        <Redirect to={routes.MAIN_PAGE.path} />
      </Switch>
    </div>
  );
};

export default MainLayout;
