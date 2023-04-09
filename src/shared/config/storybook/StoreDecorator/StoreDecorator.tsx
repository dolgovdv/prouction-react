import {type StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {type Story} from '@storybook/react'
import {type DeepPartial} from '@reduxjs/toolkit'
// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
    (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    )
