import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter.js';

import './app.css';

export const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
