import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 50px;
  background-color: transparent;
  width: 100%;
  position: absolute; 
`;

export const Hamburguer = styled.button`
  height: 60px;
  width: 32.81px;
  border: none;
  padding: 0;
  position: absolute;
  top: 15px;
  left: 20px; 
  background-color: transparent;
  z-index: 2;

    svg {
      color: var(--neutral-color-white-200);
      height: 47px;
      width: 47.84px;
    }
`;

export const CloseNav = styled.button`
  height: 817px;
  width: 100%;
  border: none;
  padding: 0;
  position: absolute;
  background-color: transparent;
  z-index: 3;
`;

export const NavHeader = styled.nav`
  background-color: var(--neutral-color-white-100);  
  border-radius: 0px 24px 24px 0px;
  box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
  height: 817px;
  position: absolute;
  width: 270px;
  z-index: 4;

    svg {
      left: 32.12px;
      height: 65px;
      position: absolute;
      top: 40.13px;
      width: 65px;
    }

    a {
      text-decoration: none;
    }
`;
export const UlNav = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-left: 24px;
  position: absolute;
  top: 137px;
`;

export const Li = styled.li`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-m);
  color: var(--brand-color-primary);
  text-align: left;
  list-style: none;
  cursor: pointer;
`;
