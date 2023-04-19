import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
// import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {type FC, memo, useCallback, useState} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {LoginModal} from 'features/AuthByUsername'
import {useDispatch, useSelector} from 'react-redux'
import {getUserAuthData, userActions} from 'entities/User'

// import {useTranslation} from 'react-i18next'

interface NavbarProps {
    className?: string
}

// eslint-disable-next-line react/prop-types
export const Navbar: FC<NavbarProps> = memo(({className = ''}) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const authData = useSelector(getUserAuthData)
    const [isAuthModal, isSetAuthModal] = useState<boolean>(false)
    const onCloseModal = useCallback((): void => {
        isSetAuthModal(false)
    }, [])
    const onShowModal = useCallback((): void => {
        isSetAuthModal(true)
    }, [])

    const onLogout = useCallback((): void => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData != null) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.OUTLINE_SECONDARY}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        )
    }
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.SECONDARY} className={cls.links} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} lazy={true} />
        </div>
    )
})

Navbar.displayName = 'Navbar'
