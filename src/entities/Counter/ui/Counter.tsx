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
            <h1 data-testid={'value-title'}>
                {t('value')} ={counterValue}
            </h1>
            <Button
                data-testid={'increment-btn'}
                onClick={increment}
                theme={ButtonTheme.OUTLINE_SECONDARY}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid={'decrement-btn'}
                onClick={decrement}
                theme={ButtonTheme.OUTLINE_SECONDARY}
            >
                {t('decrement')}
            </Button>
        </div>
    )
}
