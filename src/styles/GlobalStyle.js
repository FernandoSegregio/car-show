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
    /* brand-colors */
  --neutral-color-white: #EBEFF2;
  --brand-color-tertiary: #D2D4D9;
  --brand-color-secundary: #AFAFAF;
  --brand-color-primary: #1D2527;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
