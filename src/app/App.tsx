import './styles/index.scss'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'
import {type FC, Suspense, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserAuthData, getUserInited, userActions} from 'entities/User'

export const App: FC = () => {
    const {theme = Theme.LIGHT} = useTheme()
    const dispatch = useDispatch()
    const auth = useSelector(getUserAuthData)
    const _inited = useSelector(getUserInited)
    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <div className='content-page'>
                    {auth != null && <Sidebar />}
                    {_inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}

export default App
