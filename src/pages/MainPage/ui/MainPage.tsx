import {useState, type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Counter} from 'entities/Counter'
import {Input} from 'shared/ui/Input'
const MainPage: FC = () => {
    const {t} = useTranslation(['main'])
    const [state, setState] = useState('')
    const onChange = (val: string): void => {
        setState(val)
    }
    return (
        <div>
            {t('Главная')}
            <Counter />
            <Input value={state} onChange={onChange} autoFocus={true} />
        </div>
    )
}

export default MainPage
