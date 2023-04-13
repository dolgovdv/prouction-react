import {type StateSchema} from 'app/providers/StoreProvider'
import {type AsyncThunkAction} from '@reduxjs/toolkit'

type ActionCretorType<Return, Arg, RejectValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, {rejectValue: RejectValue}>

export class TestAsyncThunk<Return, Arg, RejectValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: ActionCretorType<Return, Arg, RejectValue>

    constructor(actionCreator: ActionCretorType<Return, Arg, RejectValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, undefined)
        return result
    }
}
