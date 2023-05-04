import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import {AppRoutes} from 'shared/config/routeConfig/appRoutes'
import type React from 'react'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {path: AppRoutes.MAIN, text: 'Main', Icon: MainIcon},
    {path: AppRoutes.ABOUT, text: 'About', Icon: AboutIcon},
    {
        path: AppRoutes.PROFILE,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
]
