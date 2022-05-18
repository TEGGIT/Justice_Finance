import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../../router/routes";

const AppRouter = () => {
  const aut =  JSON.parse(localStorage.getItem('LOGIN_USER'))

  return (
    <Routes>
      {aut ? (
        <>
          {privateRoutes.map((route) =>
            <Route
              element={route.element}
              path={route.path}
              exact={route.exact}
            />
          )}

        </>


      ) : (
        <>
          {publicRoutes.map((route) =>
            <Route
              element={route.element}
              path={route.path}
              exact={route.exact}
            />
          )}
          <Route
            path="*"
            element={<Navigate to="/" replace/>}
          />
        </>
      )}

    </Routes>
  );
};

export default AppRouter;