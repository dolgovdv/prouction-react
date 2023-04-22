import {type StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {type Story} from '@storybook/react'
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice'
import {profileReducer} from 'entities/Profile'
import {type ReducersList} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'

const defaultReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
}
export const StoreDecorator =
    // eslint-disable-next-line react/display-name
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{...defaultReducers, ...asyncReducers}}
            >
                <StoryComponent />
            </StoreProvider>
        )
