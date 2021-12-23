import React from 'react';

const App = React.lazy(() => import('./App'));

const routes = [{ path: 'app2', element: <App /> }];

export default routes;
