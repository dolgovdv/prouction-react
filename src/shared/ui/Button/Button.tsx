import {classNames, type Mods} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import {type ButtonHTMLAttributes, memo, type ReactNode} from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    SECONDARY = 'secondary',
    OUTLINE_SECONDARY = 'outline-secondary',
    BACKGROUND = 'background',
    BACKGROUND_SECONDARY = 'background-secondary',
}

type ButtonSize = 'size_m' | 'size_l' | 'size_xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = 'size_m',
        disabled = false,
        ...rest
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    }
    const additional = [className, cls[theme], cls[size]]
    return (
        <button className={classNames(cls.button, mods, additional)} disabled={disabled} {...rest}>
            {children}
        </button>
    )
})

Button.displayName = 'Button'
