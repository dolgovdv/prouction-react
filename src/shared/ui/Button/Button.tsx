import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import {type ButtonHTMLAttributes, type FC} from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    SECONDARY = 'secondary',
    BACKGROUND = 'background',
    BACKGROUND_SECONDARY = 'background-secondary',
}

type ButtonSize = 'size_m' | 'size_l' | 'size_xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = 'size_m',
        ...rest
    } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    }
    const additional = [className, cls[theme], cls[size]]
    return (
        <button className={classNames(cls.button, mods, additional)} {...rest}>
            {children}
        </button>
    )
}
