import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  /* font */
  --font-family-project: Montserrat, sans-serif, -apple-system;
  --font-style-title: bebas-kai;  

    /* font size */
  --font-size-s: 1rem; /* 16px */
  --font-size-m : 1.25rem /* 20px */
  --font-size-l: 1.5rem; /* 24px */ 
  --font-size-xl: 2rem; /* 32px */
  --font-size-xxl: 3.5rem; /* 56px */

    /* line height */
  --line-height-default: 100%;
  --line-height-m: 150%;
  --line-height-l: 200%;

    /* font weight */
  --font-weight-500: 500;
  --font-weight-600: 600; 
  --font-weight-bold: bold;
  --font-weight-normal: normal;

    /* brand-colors */
  --neutral-color-white: #EBEFF2;
  --brand-color-tertiary: #D2D4D9;
  --brand-color-secundary: #AFAFAF;
  --brand-color-primary: #1D2527;

  /* border radius */
  --border-radius-nano: 0.25rem; /* 4px */
  --border-radius-s: 0.375rem; /* 6px */
  --border-radius-m: 1.312rem; /* 21px */
  --border-radius-l: 1.5rem; /* 24px */
  --border-radius-circle: 50%;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
