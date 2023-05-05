import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev-r4tsd83w3zgmo8cc.us.auth0.com'
  clientId='mChTQ9llCAMTRsvs7Tnlc9l91YTgGNUH'
  redirectUri={window.location.origin}
  >
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
);

reportWebVitals();
