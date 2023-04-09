import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import {LoginForm} from './LoginForm'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
    StoreDecorator({
        loginForm: {username: '123', password: 'asd'},
    }),
]

export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [
    StoreDecorator({
        loginForm: {username: '123', password: 'asd', error: 'error'},
    }),
]

export const IsLoading = Template.bind({})
IsLoading.args = {}
IsLoading.decorators = [
    StoreDecorator({
        loginForm: {isLoading: true},
    }),
]
