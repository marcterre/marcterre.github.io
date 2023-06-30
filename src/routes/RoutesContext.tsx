import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePageView } from "../views/HomePageView";
import AuthenticationView from "../views/AuthenticationView/AuthenticationView";

export const RoutesContext = () => {
  const routes = [
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
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
