import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Navbar} from './Navbar'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
    StoreDecorator({
        loginForm: {username: '123', password: 'asd'},
    }),
]
export const DARK = Template.bind({})
DARK.args = {}
DARK.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {username: '123', password: 'asd'},
    }),
]

export const AuthNavbar = Template.bind({})
AuthNavbar.args = {}
AuthNavbar.decorators = [
    StoreDecorator({
        user: {authData: {id: '', username: ''}},
    }),
]
