import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButtons {
  CLEAR = 'clear',
  SECONDARY = 'secondary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButtons
}

export const Button: FC<ButtonProps> = (props) => {
  const { className = '', children, theme = ThemeButtons.CLEAR, ...rest } = props
  return (
        <button className={classNames(cls.button, {}, [className, cls[theme]])} {...rest}>
            {children}
        </button>
  )
}
