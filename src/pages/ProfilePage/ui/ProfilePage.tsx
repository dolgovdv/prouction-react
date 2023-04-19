import {classNames} from 'shared/lib/classNames/classNames'
// import cls from './ProfilePage.module.scss'
import {useTranslation} from 'react-i18next'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {profileReducer} from 'entities/Profile'

const reducers: ReducersList = {profile: profileReducer}
interface ProfilePageProps {
    className?: string
}

export const ProfilePage = (props: ProfilePageProps): JSX.Element => {
    const {className = ''} = props
    const {t} = useTranslation(['profile'])
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>{t('profile:Профиль')}</div>
        </DynamicModuleLoader>
    )
}
