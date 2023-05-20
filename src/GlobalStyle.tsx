import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --space-cadet: #2b2d42;
    --cool-gray: #8d99ae;
    --antiflash-white: #edf2f4;
    --red-pantone: #ef233c;
    --fire-engine-red: #d90429;
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
    color: var(--antiflash-white)
  }

  #app {
    width: 100%;
    height: 100%;
  }
`;

export { GlobalStyle };
