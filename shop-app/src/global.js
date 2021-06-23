// global syles
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.primaryFont};
    font-size: ${({ theme }) => theme.primaryFontSize};
    font-weight: 400;
    color: ${({ theme }) => theme.primaryColor};
    line-height: 1.5;
    min-width: 420px;    
  }
  a {
    text-decoration: none;
  }
  a, img {
      outline: 0;
      border: 0;
  }
  p {
      margin-bottom: 10px;
  }
  ul, ol {
      list-style-type: none;
  }
  h1, h2, h3, h4, h5, h6 {
      font-family: ${({ theme }) => theme.primaryFont};
      line-height: 1.5em;
  }
 
  `