import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import {memo, type ReactNode} from 'react'
import {Link, type LinkProps} from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    OUTLINE_SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const {children, className = '', to, theme = AppLinkTheme.PRIMARY} = props
    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
})

AppLink.displayName = 'AppLink'
