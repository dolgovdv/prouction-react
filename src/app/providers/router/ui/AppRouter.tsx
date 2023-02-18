import { type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'
import { AppRoutes } from 'shared/config/routeConfig/appRoutes'
import MainPage from 'pages/MainPage/ui/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { t } from 'i18next'

export const routeConfig: RouteProps[] = [
  {
    path: AppRoutes.MAIN,
    element: <MainPage/>
  },
  {
    path: AppRoutes.ABOUT,
    element: <AboutPage/>
  },
  {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage/>
  }
]

export const AppRouter: FC = () => {
  return (
        <Suspense fallback={<div>{t('Загрузка')}</div>}>
            <Routes>
                {routeConfig.map(({ path, element }) => {
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
  )
}
