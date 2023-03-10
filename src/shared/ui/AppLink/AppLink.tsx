import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import {type FC} from 'react'
import {Link, type LinkProps} from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    OUTLINE_SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {children, className = '', to, theme = AppLinkTheme.PRIMARY} = props
    return (
        <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
}
