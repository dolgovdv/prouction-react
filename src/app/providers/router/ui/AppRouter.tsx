import React, {Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {AppRoutes} from "shared/config/routeConfig/appRoutes";
import MainPage from "pages/MainPage/ui/MainPage";
import {AboutPage} from "pages/AboutPage";


export const routeConfig: RouteProps[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage/>
    },
    {
        path: AppRoutes.ABOUT,
        element: <AboutPage/>
    }
]

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {routeConfig.map(({path, element}) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={(
                                    <div className="page-wrapper">
                                        {element}
                                    </div>
                                )}
                            />
                        )
                    }
                )}
            </Routes>
        </Suspense>
    );
};