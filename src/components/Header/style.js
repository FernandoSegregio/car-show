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
  position: relative;

    svg {
      left: 32.12px;
      height: 65px;
      position: absolute;
      top: 40.13px;
      width: 65px;
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
