import React from 'react';
import './style.css';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import Quiz from './Quiz';

document.body.innerHTML = '<div id="app"></div>';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Quiz',
    element: <Quiz />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<RouterProvider router={router} />);
