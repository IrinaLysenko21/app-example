import React from 'react';
import cn from 'classnames';
import s from './Sidebar.module.scss';

type PropsType = {
  title?: string;
  children: React.ReactNode;
};

const Sidebar = ({ title, children }: PropsType) => {
  return (
    <div className={s.sidebar}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Sidebar;
