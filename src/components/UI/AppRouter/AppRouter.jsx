import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthContext} from '../../../context'
import {privateRoutes, publicRoutes} from "../../../router/routes";

const AppRouter = () => {
    const {aut} = useContext(AuthContext)
    return (
        <Routes>
            {aut ? (
                <>
                    {privateRoutes.map((route) =>
                        <>
                            <Route
                                element={route.element}
                                path={route.path}
                                exact={route.exact}
                            />
                        </>
                    )}

                </>


            ) : (
                <>
                    {publicRoutes.map((route) =>
                        <>
                            <Route
                                element={route.element}
                                path={route.path}
                                exact={route.exact}

                            />

                        </>
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