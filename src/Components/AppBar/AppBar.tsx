import React from "react";
import { NavLink } from "react-router-dom";
import themes from '../themes/themes'
import {Wrapper} from './AppBarStyled'
interface ITheme {
  theme: any;
}

const AppBar = ({theme}: ITheme) => {
  return (
    
    <Wrapper color={theme.bgColor}>
      <NavLink to="/" exact className="link" activeClassName="activeLink">
        Home
      </NavLink>
      <NavLink to="/todos" className="link" activeClassName="activeLink">
        todos
      </NavLink>
    </Wrapper>
  );
};

export default AppBar;
