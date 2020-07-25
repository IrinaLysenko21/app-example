import MainPage from '../pages/MainPage/MainPage';
import NotepadPage from '../pages/NotepadPage/NotepadPage';
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage';
import AccountPage from '../pages/AccountPage/AccountPage';

export default {
  MAIN_PAGE: {
    path: '/',
    component: MainPage,
  },

  NOTEPAD_PAGE: {
    path: '/notepad',
    component: NotepadPage,
  },

  ARTICLES_PAGE: {
    path: '/articles',
    component: ArticlesPage,
  },

  ACCOUNT_PAGE: {
    path: '/account',
    component: AccountPage,
  },
};
