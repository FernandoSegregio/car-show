import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 96px;
  width: 100%;
  display: flex;
  position: absolute;
  background-color: ${(props) => props.theme.background};


  & > svg {
      z-index: 2;
      width: 65px;
      height: 65px;
      margin: 24.13px 0 0 32.12px;
      color: var(--neutral-color-white-100);
    }
`;

export const NavHeader = styled.nav`
  width: calc(100% - 48px);
  display: flex;
  z-index: 2;
  margin: 30px 60px 0;

    a {
      text-decoration: none;
    }
`;

export const UlNav = styled.ul`
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
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
