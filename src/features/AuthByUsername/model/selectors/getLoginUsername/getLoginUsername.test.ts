import {type DeepPartial} from '@reduxjs/toolkit'
import {type StateSchema} from 'app/providers/StoreProvider'
import {getLoginUsername} from './getLoginUsername'

describe('getLoginUsername', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            loginForm: {
                username: 'user',
            },
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('user')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
