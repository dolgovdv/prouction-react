import {type FC} from 'react'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useDispatch, useSelector} from 'react-redux'
import {counterActions} from '../model/slice/counterSlice'
import {getCounterValue} from 'entities/Counter/model/selectors/getCounterValue/getCounterValue'
import {useTranslation} from 'react-i18next'

export const Counter: FC = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = (): void => {
        dispatch(counterActions.increment())
    }
    const decrement = (): void => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <h1>
                {t('value')} ={counterValue}
            </h1>
            <Button onClick={increment} theme={ButtonTheme.SECONDARY}>
                {t('increment')}
            </Button>
            <Button onClick={decrement} theme={ButtonTheme.SECONDARY}>
                {t('decrement')}
            </Button>
        </div>
    )
}
