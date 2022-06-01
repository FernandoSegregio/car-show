import styled from 'styled-components';
import backgroundMobile from '../../assets/images/background-mobile.jpg';

export const MainContainer = styled.main`
  background-color: var(--neutral-color-white-200);
  height: 817px;
  width: 100%;
`;

export const SectionMain = styled.section`
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-x: 50%;
  background-position-y: 50%;
  height: 260px;
  width: 100%;
  clip-path: ellipse(426px 208px at 50% 20%);
  z-index: 0;
  position: relative;

    h1 {
      color: #EBEBEB;
      font-size: 59.9658px;
      font-family: bebas-kai;   
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-m);
      letter-spacing: 0.12em;
      text-align: center;
      position: absolute;
      top: 45px;
      left: 20%;
    }
`;
