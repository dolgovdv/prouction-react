import {Select} from 'shared/ui/Select/Select'
import {Currency} from 'entities/Currency'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo, useCallback} from 'react'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readOnly?: boolean
}

const options = [
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.US, content: Currency.US},
]
export const CurrencySelect = memo((props: CurrencySelectProps): JSX.Element => {
    const {className = '', value, onChange, readOnly = false} = props
    const {t} = useTranslation()
    const onHandleChange = useCallback(
        (value: string) => {
            onChange?.(value as Currency)
        },
        [onChange]
    )

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Валюта')}
            options={options}
            value={value}
            onChange={onHandleChange}
            readOnly={readOnly}
        />
    )
})
CurrencySelect.displayName = 'CurrencySelect'
