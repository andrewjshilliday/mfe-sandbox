import React from 'react';

const App = React.lazy(() => import('./App'));

const routes = [{ path: 'app1', element: <App /> }];

export default routes;
