import {lazy} from 'react'

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
export const AboutPageAsync = lazy(
    async () =>
        await import('./AboutPage').then((module) => ({
            default: module.AboutPage,
        }))
)
