import {classNames} from 'shared/lib/classNames/classNames'
// import cls from './ProfilePage.module.scss'
import {
    DynamicModuleLoader,
    type ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'

const reducers: ReducersList = {profile: profileReducer}
interface ProfilePageProps {
    className?: string
}

export const ProfilePage = (props: ProfilePageProps): JSX.Element => {
    const {className = ''} = props
    const dispatch = useDispatch()

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
