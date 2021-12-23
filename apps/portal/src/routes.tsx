import React, { useEffect, useRef, useState } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { fallbackRoute } from './components/FallbackPage';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

import Login from 'login/Login';
import routesHome from 'home/routes';
import MountApp from './components/MountApp';

export const routesHook = (): RouteObject[] => {
  const [routesApp1, setRoutesApp1] = useState<RouteObject[]>([...fallbackRoute('app1')]);
  const [routesApp2, setRoutesApp2] = useState<RouteObject[]>([...fallbackRoute('app2')]);
  const [routesApp3, setRoutesApp3] = useState<RouteObject[]>([...fallbackRoute('app3')]);
  const [routesApp4, setRoutesApp4] = useState<RouteObject[]>([...fallbackRoute('app4')]);
  const [routesSvelte, setRoutesSvelte] = useState<RouteObject[]>([...fallbackRoute('appSvelte')]);
  const [routesVue, setRoutesVue] = useState<RouteObject[]>([...fallbackRoute('appVue')]);
  const [routes, setRoutes] = useState<RouteObject[]>([]);

  useEffect(() => {
    import('app1/routes')
      .then(routes => setRoutesApp1(routes.default))
      .catch(err =>  console.error(err));
    import('app2/routes')
      .then(routes => setRoutesApp2(routes.default))
      .catch(err =>  console.error(err));
    import('app3/routes')
      .then(routes => setRoutesApp3(routes.default))
      .catch(err =>  console.error(err));
    import('app4/routes')
      .then(routes => setRoutesApp4(routes.default))
      .catch(err =>  console.error(err));
    import('appSvelte/App')
      .then(app => setRoutesSvelte([{ path: 'appSvelte', element: <MountApp key='appSvelte' mount={app.mount} />}]))
      .catch(err => console.error(err));
    import('appVue/App')
      .then(app => setRoutesVue([{ path: 'appVue', element: <MountApp key='appVue' mount={app.mount} />}]))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    setRoutes([
      { path: 'login', element: <Login /> },
      {
        path: '/',
        element: <ProtectedRoute><Layout /></ProtectedRoute>,
        children: [
          ...routesHome,
          ...routesApp1,
          ...routesApp2,
          ...routesApp3,
          ...routesApp4,
          ...routesSvelte,
          ...routesVue,
          { path: '*', element: <Navigate replace to='/' /> }
        ]
      }
    ])
  }, [routesApp1, routesApp2, routesApp3, routesApp4, routesSvelte, routesVue]);

  return routes;
};
