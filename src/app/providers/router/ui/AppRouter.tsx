import {type FC, memo, Suspense, useCallback} from 'react'
import {Route, type RouteProps, Routes} from 'react-router-dom'
import {AppRoutes} from 'shared/config/routeConfig/appRoutes'
import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {PageLoader} from 'shared/ui/PageLoader/PageLoader'
import {ProfilePage} from 'pages/ProfilePage'
import {RequireAuth} from 'app/providers/router/ui/RequireAuth'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}
export const routeConfig: AppRoutesProps[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage />,
    },
    {
        path: AppRoutes.ABOUT,
        element: <AboutPage />,
        authOnly: true,
    },
    {
        path: AppRoutes.PROFILE,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: AppRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
]

export const AppRouter: FC = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className='page-wrapper'>{route.element}</div>
            </Suspense>
        )
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly === true ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
})
AppRouter.displayName = 'AppRouter'
