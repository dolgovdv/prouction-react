import {type DeepPartial} from '@reduxjs/toolkit'
import {type StateSchema} from 'app/providers/StoreProvider'
import {getLoginLoading} from './getLoginLoading'

describe('getLoginLoading', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            loginForm: {
                isLoading: true,
            },
        }
        expect(getLoginLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginLoading(state as StateSchema)).toEqual(false)
    })
})
