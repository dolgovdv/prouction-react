import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import {type ReactElement} from 'react'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text = (props: TextProps): ReactElement => {
    const {className = '', title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT} = props
    return (
        <div className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}>
            {title != null && <p className={cls.title}>{title}</p>}
            {text != null && <p className={cls.text}>{text}</p>}
        </div>
    )
}
