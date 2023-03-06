import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {type FC} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const {t} = useTranslation()
    const {className = ''} = props
    return (
        <div className={classNames(cls.loginform, {}, [className])}>
            <Input type={'text'} className={classNames(cls.input)} autoFocus={true} />
            <Input type={'text'} className={classNames(cls.input)} />
            <Button theme={ButtonTheme.SECONDARY} className={classNames(cls.loginBtn)}>
                {t('Войти')}
            </Button>
        </div>
    )
}
