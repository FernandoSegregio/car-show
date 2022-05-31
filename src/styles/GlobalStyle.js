import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
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
