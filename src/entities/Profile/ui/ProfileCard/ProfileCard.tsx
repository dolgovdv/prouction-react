import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {useSelector} from 'react-redux'
import {getProfileData} from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import {Text} from 'shared/ui/Text'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Input} from 'shared/ui/Input'

interface ProfileCardProps {
    children?: JSX.Element
    className?: string
}

export const ProfileCard = (props: ProfileCardProps): JSX.Element => {
    const {t} = useTranslation(['profile'])
    const {className = ''} = props
    const data = useSelector(getProfileData)
    // const error = useSelector(getProfileError)
    // const isLpading = useSelector(getProfileIsLoading)
    return (
        <div className={classNames(cls.profilecard, {}, [className])}>
            <div>
                <div className={cls.header}>
                    <Text title={t('Профиль')} />
                    <Button theme={ButtonTheme.OUTLINE_SECONDARY}>{t('Редактировать')}</Button>
                </div>
                <div className={cls.data}>
                    <Input value={data?.first} placeholder={t('ВашеИмя')} />
                    <Input value={data?.lastname} placeholder={t('ВашеФамилия')} />
                </div>
            </div>
        </div>
    )
}
