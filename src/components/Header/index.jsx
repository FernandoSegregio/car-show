import React, { useState } from 'react';
import {
  HeaderContainer,
  NavHeader,
  Hamburguer,
  CloseNav,
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
      <CloseNav onClick={() => openMenu()} type="button" hidden={isOpen}>
        <NavHeader hidden={isOpen}>
          Header
        </NavHeader>
      </CloseNav>
    </HeaderContainer>
  );
}

export default Header;
