import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import type React from 'react'
import {memo, type InputHTMLAttributes, useEffect, useState, useRef} from 'react'

type HTMLInputPrors = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
export interface InputProps extends HTMLInputPrors {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autoFocus?: boolean
    readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        autoFocus = false,
        readOnly = false,
        ...otherProps
    } = props
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const inputElement = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(autoFocus)
            inputElement.current?.focus()
        }
    }, [autoFocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.input, {}, [className])}>
            <input
                className={classNames(cls.input, {[cls['read-only']]: readOnly}, [className])}
                ref={inputElement}
                type={type}
                value={value}
                onChange={onChangeHandler}
                autoFocus={isFocused}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    )
})

Input.displayName = 'Input'
