import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      // activeStyle: Para não precisar chamar // CSS externo
      <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="sobre" activeStyle={{ color: 'tomato' }}>
        Sobre
      </NavLink>{' '}
      |{' '}
      <NavLink to="login" activeStyle={{ color: 'tomato' }}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;