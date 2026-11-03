import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import '@fontsource-variable/inter';
import '@fontsource-variable/fraunces';
import App from './App.jsx';
import './styles.css';
import './skins.css';

// HashRouter keeps links working on any static host without rewrite rules.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
