import React, { useState } from 'react';
import {
  HeaderContainer,
  NavHeader,
  Hamburguer,
} from './style';

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  function openMenu() {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <HeaderContainer>
      <Hamburguer onClick={() => openMenu()} type="button" hidden={!isOpen}>
        <span className="iconify" data-icon="ci:hamburger" />
      </Hamburguer>
      <NavHeader hidden={isOpen}>
        Header
      </NavHeader>
    </HeaderContainer>
  );
}

export default Header;
