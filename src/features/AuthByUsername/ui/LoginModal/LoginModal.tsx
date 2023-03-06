import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import {type FC} from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import {LoginForm} from '../LoginForm/LoginForm'

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
            <LoginForm />
        </Modal>
    )
}
