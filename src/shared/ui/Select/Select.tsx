import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import {type ChangeEvent, memo, useMemo} from 'react'

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOptions[]
    value?: string
    onChange?: (value: string) => void
    readOnly?: boolean
}

export const Select = memo((props: SelectProps): JSX.Element => {
    const {className = '', label, options = [], value, onChange, readOnly = false} = props
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        if (onChange != null) {
            onChange(e.target.value)
        }
    }
    const optionsList = useMemo<JSX.Element[]>(() => {
        return options.map((item) => (
            <option key={item.value} value={item.value} className={cls.option}>
                {item?.content}
            </option>
        ))
    }, [options])
    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label != null && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                onChange={onChangeHandler}
                value={value}
                disabled={readOnly}
            >
                {optionsList}
            </select>
        </div>
    )
})
Select.displayName = 'Select'
