import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import { SleepProvider } from './data/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <React.StrictMode>
    <SleepProvider>
      <App />
    </SleepProvider>
  </React.StrictMode>,
);
