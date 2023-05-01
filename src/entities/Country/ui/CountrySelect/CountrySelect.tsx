import {Select} from 'shared/ui/Select/Select'
import {Country} from 'entities/Country'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo, useCallback} from 'react'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readOnly?: boolean
}

const options = [
    {value: Country.Russia, content: Country.Russia},
    {value: Country.US, content: Country.US},
]
export const CountrySelect = memo((props: CountrySelectProps): JSX.Element => {
    const {className = '', value, onChange, readOnly = false} = props
    const {t} = useTranslation()
    const onHandleChange = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange]
    )

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Страна')}
            options={options}
            value={value}
            onChange={onHandleChange}
            readOnly={readOnly}
        />
    )
})
CountrySelect.displayName = 'CountrySelect'
