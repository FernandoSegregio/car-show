import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  height: 96px;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  background-color: ${(props) => props.theme.background};


  svg {
      position: relative;
      left: 5%;
      top: 5px;
      z-index: 3;
      width: 65px;
      height: 65px;
      color: var(--neutral-color-white-100);
    }
`;

export const NavHeader = styled.nav`
  width: 100%;
  display: flex;
  z-index: 2;
  margin-right: 60.2px;  
    a {
      text-decoration: none;
    }
`;

export const UlNav = styled.ul`
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const Li = styled.li`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-m);
  color: var(--neutral-color-white-100);
  text-align: left;
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;

    svg {
      margin-left: 15.25px;
      height: 40.5px;
      width: 38.88px;
    }
`;
