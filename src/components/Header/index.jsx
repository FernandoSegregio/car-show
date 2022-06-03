import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import NavMobile from '../NavMobile';
import NavDesktop from '../NavDesktop';

function Header() {
  const size = useWindowSize();
  return size.width < 800 ? <NavMobile /> : <NavDesktop />;
}

export default Header;
