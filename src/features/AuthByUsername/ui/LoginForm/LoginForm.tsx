import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {memo, useCallback} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input'
import {useDispatch, useSelector} from 'react-redux'
import {loginActions} from '../../model/slice/loginSlice'
import {getLoginState} from '../..//model/selectors/getLoginState/getLoginState'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {Text} from 'shared/ui/Text'
import {TextTheme} from 'shared/ui/Text/ui/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {t} = useTranslation()
    const {className = ''} = props
    const dispatch = useDispatch()
    const {username, password, error, isLoading} = useSelector(getLoginState)
    const onChangeUsername = useCallback(
        (value) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch]
    )
    const onChangePassword = useCallback(
        (value) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch]
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.loginform, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error != null && <Text text={error} theme={TextTheme.ERROR} />}

            <Input
                type={'text'}
                className={classNames(cls.input)}
                autoFocus={true}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type={'text'}
                className={classNames(cls.input)}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE_SECONDARY}
                className={classNames(cls.loginBtn)}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})

LoginForm.displayName = 'LoginForm'
