import React from 'react';
import { Root } from './root';
import './assets/index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Router>
);


