import {type RoutesProps} from 'react-router-dom'

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    // если никакой маршрут не отработал
    NOT_FOUND = '*',
}

export type AppRoutesProps = RoutesProps
