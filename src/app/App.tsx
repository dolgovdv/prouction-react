import './styles/index.scss'
import {Theme, useTheme} from 'app/providers/ThemeProvider'
import {classNames} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/router'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'
import {type FC, Suspense, useState} from 'react'
import {Modal} from 'shared/ui/Modal/Modal'
import {Button} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'

const App: FC = () => {
    const {t} = useTranslation()
    const {theme = Theme.LIGHT} = useTheme()
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const openModal = (): void => {
        setIsOpenModal(true)
    }
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar />
                <Button type={'button'} onClick={openModal}>
                    {t('toggle-modal')}
                </Button>
                <Modal
                    isOpen={isOpenModal}
                    onClose={() => {
                        setIsOpenModal(false)
                    }}
                />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
