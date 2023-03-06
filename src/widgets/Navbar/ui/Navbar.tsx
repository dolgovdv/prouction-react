import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
// import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {type FC, useCallback, useState} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {LoginModal} from 'features/AuthByUsername'

// import {useTranslation} from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className = ''}) => {
    const {t} = useTranslation()
    const [isAuthModal, isSetAuthModal] = useState<boolean>(false)
    const onCloseModal = useCallback((): void => {
        isSetAuthModal(false)
    }, [])
    const onShowModal = useCallback((): void => {
        isSetAuthModal(true)
    }, [])
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.SECONDARY} className={cls.links} onClick={onShowModal}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} lazy={true} />
        </div>
    )
}
