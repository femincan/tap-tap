import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  html, body {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
  }

  #app {
    width: 100%;
    height: 100%;
  }
`;

export { GlobalStyle };
