import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {Text} from 'shared/ui/Text'
import {Input} from 'shared/ui/Input'
import {type Profile} from '../../model/types/profile'
import {Loader} from 'shared/ui/Loader/Loader'
import {TextAlign, TextTheme} from 'shared/ui/Text/ui/Text'

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
        <div className={classNames(cls.profilecard, {}, [className])}>
            <div>
                <div className={cls.data}>
                    <Input
                        value={data?.first}
                        placeholder={t('Имя')}
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
                    />
                    <Input
                        value={data?.city}
                        placeholder={t('Город')}
                        onChange={onChangeCity}
                        readOnly={readOnly}
                    />
                </div>
            </div>
        </div>
    )
}
