import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  NavHeader,
  UlNav,
  Li,
} from './style';

function NavDesktop() {
  return (
    <HeaderContainer>
      <span className="iconify" data-icon="carbon:logo-delicious" />
      <NavHeader>
        <UlNav>
          <Link to="/">
            <Li>Home</Li>
          </Link>
          <a href="/#about">
            <Li>Sobre</Li>
          </a>
          <Link to="/table">
            <Li>Tabela</Li>
          </Link>
          {/* <Li>Fale Conosco</Li>
          <Li>
            Entrar
            <span className="iconify" data-icon="ant-design:user-outlined" />
          </Li> */}
        </UlNav>
      </NavHeader>
    </HeaderContainer>
  );
}

export default NavDesktop;
