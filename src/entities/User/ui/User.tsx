import {classNames} from 'shared/lib/classNames/classNames'
import cls from './User.module.scss'
import {type FC} from 'react'
import {useTranslation} from 'react-i18next'

interface UserProps {
    className?: string
}

export const User: FC<UserProps> = (props) => {
    const {t} = useTranslation()
    const {className = ''} = props
    return <div className={classNames(cls.user, {}, [className])}>{t('User')}</div>
}
