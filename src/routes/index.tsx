import { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {v4 as uuid} from "uuid";

import { ROOT, LOGIN, DASHBOARD } from "../utils/routepaths";
import Dashboard from "./Dashboard/index";
import Login from "./Login/index";
import Signup from "./Signup/index";

const routesConfig = [
  {
    path: ROOT,
    component: <Signup />,
    privateRoute: false,
  },
  {
    path: LOGIN,
    component: <Login />,
    privateRoute: false,
  },
  {
    path: DASHBOARD,
    component: <Dashboard />,
    privateRoute : true,
  }
];

const ProtectedRoute = (component: ReactNode, privateRoute: boolean) => {
  const isUserPresent = localStorage.getItem("auth_token");

  const isValidRoute =
    (privateRoute && isUserPresent) || !(privateRoute || isUserPresent);
    if(isValidRoute)
      return component;
  return <Navigate to = {privateRoute?LOGIN:DASHBOARD}/>
};

const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.map((route) => {
        const obj = { ...route };
        return (
          <Route
            key={uuid()}
            path={obj.path}
            element={ProtectedRoute(obj.component, obj.privateRoute)}
          ></Route>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
