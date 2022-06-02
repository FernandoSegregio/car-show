import styled from 'styled-components';
import backgroundMobile from '../../assets/images/background-mobile.jpg';
import backgroundAbout from '../../assets/images/background-about.jpg';

export const MainContainer = styled.main`
  background-color: var(--neutral-color-white-200);
  height: 817px;
  width: 100%;

    div {
      align-items: center;
      background-color: var(--neutral-color-white-300);
      display: flex;
      height: 530px;
      justify-content: center;
    }
`;

export const SectionMain = styled.section`
  background-color: var(--neutral-color-white-300);
  background-image: url(${backgroundMobile});
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: 100%;
  clip-path: ellipse(426px 208px at 50% 20%);
  height: 260px;
  position: relative;
  width: 100%;
  z-index: 0;

    h1 {
      color: var(--neutral-color-white-300);
      font-family: bebas-kai;   
      font-size: 59.9658px;
      font-weight: var(--font-weight-bold);
      left: 20%;
      letter-spacing: 0.12em;
      line-height: var(--line-height-m);
      position: absolute;
      text-align: center;
      top: 45px;
    }
`;

export const SectionAbout = styled.section`
  background-image: url(${backgroundAbout});
  background-position-x: -2px;
  background-position-y: -16px;
  background-repeat: no-repeat;
  background-size: cover; 
  height: 568px;
  position: relative;
  width: 100%;
  z-index: 0;

    div {
      backdrop-filter: blur(1.6679px);
      background: linear-gradient(270deg, rgba(29, 37, 39, 0.6) 15.42%, rgba(29, 37, 39, 0.552) 35.73%, rgba(29, 37, 39, 0.156) 78.67%, rgba(29, 37, 39, 0) 100%);
      height: 359px;
      position: absolute;
      transform: rotate(-90deg);
      width: 100%;
    }

    h1 {
      color: var(--neutral-color-white-100);
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-normal);
      line-height: var(--line-height-m);
      text-align: right;
    }

    p {
      color: var(--neutral-color-white-100);
      font-size: var(--font-size-s);
      font-weight: var(--font-weight-300);
      line-height: var(--line-height-l);
      text-align: right;
    }
`;

export const ButtonAbout = styled.button`
  background-color: transparent;
  border-radius: 2.51009px;
  border: 0.627523px solid var(--neutral-color-white-100);
  color: var(--neutral-color-white-100);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-500);
  height: 40px;
  line-height: var(--line-height-l);
  margin-right: 11px;  
  text-align: center;
  width: 193px;
`;

export const ArticleAbout = styled.article`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  position: relative;
  row-gap: 15px;
  top: 40px;
`;
