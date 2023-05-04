import {type FC, memo, Suspense, useMemo} from 'react'
import {Route, type RouteProps, Routes} from 'react-router-dom'
import {AppRoutes} from 'shared/config/routeConfig/appRoutes'
import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {PageLoader} from 'shared/ui/PageLoader/PageLoader'
import {ProfilePage} from 'pages/ProfilePage'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User'

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
    const isAuth = useSelector(getUserAuthData)
    const routes: AppRoutesProps[] = useMemo(
        () =>
            Object.values(routeConfig).filter((route) => {
                if (route.authOnly === true && isAuth == null) {
                    return false
                } else {
                    return true
                }
            }),
        [isAuth]
    )

    return (
        <Routes>
            {routes?.map(({path, element}) => {
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
})
AppRouter.displayName = 'AppRouter'
