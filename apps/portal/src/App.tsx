import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { routesHook } from './routes';
import './index.scss';

const Routes = () => {
  const routes = routesHook();
  const appRoutes = useRoutes(routes);
  return appRoutes;
};

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
