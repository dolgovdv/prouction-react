import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {Text} from 'shared/ui/Text'
import {Input} from 'shared/ui/Input'
import {type Profile} from '../../model/types/profile'
import {Loader} from 'shared/ui/Loader/Loader'
import {TextAlign, TextTheme} from 'shared/ui/Text/ui/Text'
import {Avatar} from 'shared/ui/Avatar/Avatar'

import {type Currency} from 'entities/Currency/model/types/currency'
import {CurrencySelect} from 'entities/Currency'
import {CountrySelect, type Country} from 'entities/Country'

interface ProfileCardProps {
    children?: JSX.Element
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    onChangeFirstName?: (value: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency: (currency: Currency) => void
    onChangeCountry: (country: Country) => void
    readOnly?: boolean
}

/**
 * Карточка профайла
 */
export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
    const {t} = useTranslation(['profile'])
    const {
        className = '',
        data,
        error,
        isLoading,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
        readOnly,
    } = props

    if (isLoading === true) {
        return (
            <div className={classNames(cls.profilecard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        )
    }

    if (error !== '') {
        return (
            <div className={classNames(cls.profilecard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Ошибка при загрузке профиля')}
                    text={t('Обновите страницу')}
                />
            </div>
        )
    }

    return (
        <div
            className={classNames(cls.profilecard, {[cls.editing]: readOnly === false}, [
                className,
            ])}
        >
            <div>
                <div className={cls.data}>
                    {data?.avatar != null && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data.avatar} alt={''} />
                        </div>
                    )}
                    <Input
                        value={data?.first}
                        placeholder={t('Имя')}
                        label={t('Имя')}
                        onChange={onChangeFirstName}
                        readOnly={readOnly}
                    />
                    <Input
                        value={data?.lastname}
                        placeholder={t('Фамилия')}
                        onChange={onChangeLastName}
                        readOnly={readOnly}
                    />
                    <Input
                        value={data?.age}
                        placeholder={t('Возраст')}
                        onChange={onChangeAge}
                        readOnly={readOnly}
                        type={'number'}
                        label={t('Возраст')}
                    />
                    <Input
                        value={data?.city}
                        placeholder={t('Город')}
                        onChange={onChangeCity}
                        readOnly={readOnly}
                    />
                    <Input
                        value={data?.username}
                        placeholder={t('Логин')}
                        onChange={onChangeUsername}
                        readOnly={readOnly}
                    />

                    <Input
                        value={data?.avatar}
                        placeholder={t('Аватар')}
                        onChange={onChangeAvatar}
                        readOnly={readOnly}
                    />
                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readOnly={readOnly}
                    />

                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readOnly={readOnly}
                    />
                </div>
            </div>
        </div>
    )
}
