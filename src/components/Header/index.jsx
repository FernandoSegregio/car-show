import React, { useState } from 'react';
import {
  HeaderContainer,
  NavHeader,
  Hamburguer,
  CloseNav,
  UlNav,
  Li,
} from './style';

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  function openMenu() {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <HeaderContainer>
      <Hamburguer onClick={() => openMenu()} type="button" hidden={!isOpen}>
        <span className="iconify" data-icon="cil:hamburger-menu" />
      </Hamburguer>
      <CloseNav onClick={() => openMenu()} type="button" hidden={isOpen} />
      <NavHeader hidden={isOpen}>
        <span className="iconify" data-icon="carbon:logo-delicious" />
        <UlNav>
          <a href="#home" onClick={() => openMenu()}>
            <Li>Home</Li>
          </a>
          <Li>Fale Conosco</Li>
          <a href="#about" onClick={() => openMenu()}>
            <Li>Sobre</Li>
          </a>
          <Li>Tabela</Li>
        </UlNav>
      </NavHeader>
    </HeaderContainer>
  );
}

export default Header;
