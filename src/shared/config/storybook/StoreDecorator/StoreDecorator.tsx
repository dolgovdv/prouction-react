import {type StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {type Story} from '@storybook/react'
import {type DeepPartial, type ReducersMapObject} from '@reduxjs/toolkit'
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice'
// eslint-disable-next-line react/display-name

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {loginForm: loginReducer}

// eslint-disable-next-line react/display-name
export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    ) =>
    // eslint-disable-next-line react/display-name
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{...defaultReducers, ...asyncReducers}}
            >
                <StoryComponent />
            </StoreProvider>
        )
