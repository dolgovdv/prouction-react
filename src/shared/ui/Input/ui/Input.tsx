import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import type React from 'react'
import {memo, type InputHTMLAttributes, useEffect, useState, useRef} from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autoFocus?: boolean
    readOnly?: boolean
    label?: string
}

export const Input = memo((props: InputProps) => {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        autoFocus = false,
        readOnly = false,
        label,
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
            <label>
                {label != null && label}
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
            </label>
        </div>
    )
})

Input.displayName = 'Input'
