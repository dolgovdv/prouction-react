import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
// import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {type FC, useCallback, useState} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {Modal} from 'shared/ui/Modal/Modal'

// import {useTranslation} from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({className = ''}) => {
    const {t} = useTranslation()
    const [isAuthModal, isSetAuthModal] = useState<boolean>(false)
    const onToggleModal = useCallback((): void => {
        isSetAuthModal((prevState) => !prevState)
    }, [])
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('isAuthModal')}
            </Modal>
        </div>
    )
}
