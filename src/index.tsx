import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './GlobalStyle';
import { App } from './App';

const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
