import React from 'react';
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
          <a href="#home">
            <Li>Home</Li>
          </a>
          <a href="#about">
            <Li>Sobre</Li>
          </a>
          <Li>Tabela</Li>
          <Li>Fale Conosco</Li>
          <Li>
            Entrar
            <span className="iconify" data-icon="ant-design:user-outlined" />
          </Li>
        </UlNav>
      </NavHeader>
    </HeaderContainer>
  );
}

export default NavDesktop;
