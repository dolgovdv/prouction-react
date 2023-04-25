import {useCallback} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import {Text} from 'shared/ui/Text'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getProfileReadonly, profileActions, updateProfileData} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hook/useAppDispatch/useAppDispatch'

interface ProfilePageHeaderProps {
    className?: string
}

/**
 * Заголовок профайла
 */
export const ProfilePageHeader = (props: ProfilePageHeaderProps): JSX.Element => {
    const {className = ''} = props
    const {t} = useTranslation(['profile'])

    const readOnly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        void dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls['profile-page-header'], {}, [className])}>
            <Text title={t('Профиль')} />
            {readOnly ? (
                <Button
                    theme={ButtonTheme.OUTLINE_SECONDARY}
                    className={cls['edit-btn']}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        className={cls['edit-btn']}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE_SECONDARY}
                        className={cls['save-btn']}
                        onClick={onSave}
                    >
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    )
}
