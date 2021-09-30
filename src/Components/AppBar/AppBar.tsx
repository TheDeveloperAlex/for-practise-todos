import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <div className={s.LinkWrapper}>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      <NavLink to="/todos" className={s.link} activeClassName={s.activeLink}>
        todos
      </NavLink>
    </div>
  );
};

export default AppBar;
