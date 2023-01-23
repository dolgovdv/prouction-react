import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

type Props = {};
export const AppRouter = (props: Props) => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => {
                        return <Route key={path} path={path} element={element}/>
                    }
                )}
            </Routes>
        </Suspense>
    );
};