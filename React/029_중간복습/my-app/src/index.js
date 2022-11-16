import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

// const GlobalStyle = createGlobalStyle`
//   ${reset}
// `;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    {/* <GlobalStyle /> */}
    <App tab="home" />
  </>
);