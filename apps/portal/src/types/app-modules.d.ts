/// <reference types="react" />

import { RouteObject } from "react-router-dom";

declare module "login/Login" {
  const Login: React.FC;
  export default Login;
}

declare module "login/routes" {
  const routes: RouteObject[];
  export default routes;
}

declare module "login/loginUtils" {
  export function useLoggedIn(): boolean;
  export function logout(): void
}

declare module "home/Home" {
  const Home: React.ComponentType;
  export default Home;
}

declare module "home/routes" {
  const routes: RouteObject[];
  export default routes;
}

declare module "app1/App1" {
  const App1: React.ComponentType;
  export default App1;
}

declare module "app1/routes" {
  const routes: RouteObject[];
  export default routes;
}

declare module "app2/App2" {
  const App2: React.ComponentType;
  export default App2;
}

declare module "app2/routes" {
  const routes: RouteObject[];
  export default routes;
}

declare module "app3/App3" {
  const App3: React.ComponentType;
  export default App3;
}

declare module "app3/routes" {
  const routes: RouteObject[];
  export default routes;
}

declare module "app4/App4" {
  const App4: React.ComponentType;
  export default App4;
}

declare module "app4/routes" {
  const routes: RouteObject[];
  export default routes;
}

declare module "appSvelte/App" {
  export function mount(element: React.ReactNode): void
}

declare module "appVue/App" {
  export function mount(element: React.ReactNode): void
}
