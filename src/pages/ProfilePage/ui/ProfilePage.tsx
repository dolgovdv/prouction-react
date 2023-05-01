import {classNames} from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile'
import {useCallback, useEffect} from 'react'
import {useAppDispatch} from 'shared/lib/hook/useAppDispatch/useAppDispatch'
import {useSelector} from 'react-redux'
import {ProfilePageHeader} from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader'
import {type Currency} from 'entities/Currency'

import {type Country} from 'entities/Country'

const reducers: ReducersList = {profile: profileReducer}
interface ProfilePageProps {
    className?: string
}

export const ProfilePage = (props: ProfilePageProps): JSX.Element => {
    const {className = ''} = props
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readOnly = useSelector(getProfileReadonly)

    useEffect(() => {
        void dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({first: value ?? ''}))
        },
        [dispatch]
    )

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({lastname: value ?? ''}))
        },
        [dispatch]
    )

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({city: value ?? ''}))
        },
        [dispatch]
    )

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({age: Number(value ?? 0)}))
        },
        [dispatch]
    )
    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({username: value ?? ''}))
        },
        [dispatch]
    )
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({avatar: value ?? ''}))
        },
        [dispatch]
    )
    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({currency}))
        },
        [dispatch]
    )
    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({country}))
        },
        [dispatch]
    )

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    readOnly={readOnly}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    )
}
