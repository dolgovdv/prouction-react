import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import {type FC, Suspense} from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import {Loader} from 'shared/ui/Loader/Loader'
import {LoginFormAsync} from '../LoginForm/LoginForm.async'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {isOpen = false, onClose, className = '', lazy = false} = props
    return (
        <Modal
            className={classNames(cls.loginmodal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={lazy}
        >
            <Suspense fallback={Loader}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    )
}
