import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {memo, useCallback} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input'
import {useSelector} from 'react-redux'
import {loginActions, loginReducer} from '../../model/slice/loginSlice'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {Text} from 'shared/ui/Text'
import {TextTheme} from 'shared/ui/Text/ui/Text'
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginUsername'
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError'
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword'
import {getLoginLoading} from '../../model/selectors/getLoginLoading/getLoginLoading'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {useAppDispatch} from 'shared/lib/hook/useAppDispatch/useAppDispatch'

const initialReducers: ReducersList = {loginForm: loginReducer}

interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {t} = useTranslation(['error'])

    const {className = '', onSuccess} = props
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const error = useSelector(getLoginError)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginLoading)

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

    // TODO: должна быть async функция
    const onLoginClick = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/await-thenable
        const result = Promise.resolve(dispatch(loginByUsername({username, password})))
        console.log(result)
        void result.then((data) => {
            if (data.meta.requestStatus === 'fulfilled') {
                onSuccess()
            }
        })
    }, [dispatch, onSuccess, password, username])

    /**
     * Действия при ошибке
     */
    if (error != null) {
        console.log(error)
    }
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.loginform, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error != null && (
                    <Text text={t('Неправильно_введен_логин_или_пароль')} theme={TextTheme.ERROR} />
                )}

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
                    onClick={onLoginClick}
                    theme={ButtonTheme.OUTLINE_SECONDARY}
                    className={classNames(cls.loginBtn)}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

LoginForm.displayName = 'LoginForm'
