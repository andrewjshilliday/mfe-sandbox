import React from 'react';
import { Navigate } from 'react-router-dom';

// import App, { One, Two } from './App';
const App = React.lazy(() => import('./App'));
const One = React.lazy(() => import('./components/One'));
const Two = React.lazy(() => import('./components/Two'));

const routes = [
  {
    path: '/app4',
    element: <App />,
    children: [
      { path: '/app4/one', element: <One /> },
      { path: '/app4/two', element: <Two /> },
      { path: '/app4/*', element: <Navigate replace to='/app4' /> }
    ]
  }
];

export default routes;
