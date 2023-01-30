import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButtons {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButtons,
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, ...rest} = props
    return (
        <button className={classNames(cls.button, {}, [className, cls[theme]])} {...rest}>
            {children}
        </button>
    );
};