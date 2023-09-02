import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root'); // Usar 'root' en lugar de 'app'
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App tab="home" />
  </React.StrictMode>
);

// Resto del código
reportWebVitals();
