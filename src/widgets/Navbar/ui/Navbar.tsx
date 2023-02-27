import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
// import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {type FC} from 'react'
// import {useTranslation} from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className = ''}) => {
    return <div className={classNames(cls.navbar, {}, [className])}></div>
}
