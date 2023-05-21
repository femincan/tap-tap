import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --oxford-blue: #14213d;
    --orange-web: #fca311;
    --platinum: #e5e5e5;
    --white: #ffffff;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  html, body {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    color: var(--white)
  }

  #app {
    width: 100%;
    height: 100%;
  }
`;

export { GlobalStyle };
