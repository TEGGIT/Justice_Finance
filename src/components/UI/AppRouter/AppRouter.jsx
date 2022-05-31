import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../../router/routes";

import {useStateContext} from "../../../context/stateContext";

const AppRouter = () => {

  const {login} = useStateContext()

  return (
    <Routes>
      {login
        ? (
          <>
            {privateRoutes.map((route) =>
              <Route
                key={route.path}
                element={route.element}
                path={route.path}
                exact={route.exact}
              />
            )}
          </>
        )
        : (
          <>
            {publicRoutes.map((route) =>
              <Route
                key={route.path}
                element={route.element}
                path={route.path}
                exact={route.exact}
              />
            )}
          </>
        )}
      <Route
        path="*"
        element={<Navigate to="/" replace/>}
      />
    </Routes>
  );
};

export default AppRouter;