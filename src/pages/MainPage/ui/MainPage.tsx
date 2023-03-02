import {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Counter} from 'entities/Counter'
const MainPage: FC = () => {
    const {t} = useTranslation(['main'])
    return (
        <div>
            {t('Главная')}
            <Counter />
        </div>
    )
}

export default MainPage
