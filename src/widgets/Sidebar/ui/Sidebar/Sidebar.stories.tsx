import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Sidebar} from './Sidebar'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
]

export const DARK = Template.bind({})
DARK.args = {}
DARK.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
]

export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {},
    }),
]
