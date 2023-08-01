import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePageView } from "../views/HomePageView";
import AuthenticationView from "../views/AuthenticationView/AuthenticationView";

type RouteConfig = {
  path: string;
  element: ReactNode;
};

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <HomePageView />,
  },
  {
    path: "/login",
    element: <AuthenticationView />,
  },
  {
    path: "*",
    element: <p>Error</p>,
  },
];

export const RoutesContext = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default RoutesContext;
