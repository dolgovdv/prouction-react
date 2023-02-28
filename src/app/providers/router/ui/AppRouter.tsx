import {type FC, Suspense} from 'react'
import {Route, type RouteProps, Routes} from 'react-router-dom'
import {AppRoutes} from 'shared/config/routeConfig/appRoutes'
import MainPage from 'pages/MainPage/ui/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {PageLoader} from 'shared/ui/PageLoader/PageLoader'

export const routeConfig: RouteProps[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage />,
    },
    {
        path: AppRoutes.ABOUT,
        element: <AboutPage />,
    },
    {
        path: AppRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
]

export const AppRouter: FC = () => {
    return (
        <Routes>
            {routeConfig.map(({path, element}) => {
                return (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Suspense fallback={<PageLoader />}>
                                <div className='page-wrapper'>{element}</div>
                            </Suspense>
                        }
                    />
                )
            })}
        </Routes>
    )
}
