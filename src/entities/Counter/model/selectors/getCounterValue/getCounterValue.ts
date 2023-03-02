import {createSelector} from '@reduxjs/toolkit'
import {getCounter} from 'entities/Counter/model/selectors/getCounter/getCounter'
import {type CounterSchema} from 'entities/Counter'

export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => {
    return counter.value
})
