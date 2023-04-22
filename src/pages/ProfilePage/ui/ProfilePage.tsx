import {classNames} from 'shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile'
import {useEffect} from 'react'
import {useAppDispatch} from 'shared/lib/hook/useAppDispatch/useAppDispatch'

const reducers: ReducersList = {profile: profileReducer}
interface ProfilePageProps {
    className?: string
}

export const ProfilePage = (props: ProfilePageProps): JSX.Element => {
    const {className = ''} = props
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    )
}
