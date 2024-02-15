import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/global.scss'
import './sass/page.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
