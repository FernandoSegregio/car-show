import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 50px;
  width: 100%;
`;
export const Hamburguer = styled.button`
  height: 28.88px;
  width: 32.81px;
  border: none;
  padding: 0;
  background-color: transparent;

    svg {
      height: 28.88px;
      width: 32.81px;
    }
`;
export const CloseNav = styled.button`
  height: 817px;
  width: 100%;
  border: none;
  padding: 0;
  background-color: transparent;
  z-index: 1;
`;

export const NavHeader = styled.nav`
  background-color: var(--neutral-color-white-100);  
  border-radius: 0px 24px 24px 0px;
  box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
  height: 817px;
  width: 270px;
  z-index: 2;
`;
