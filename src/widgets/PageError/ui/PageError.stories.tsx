import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {PageError} from './PageError'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => (
    <PageError {...args} />
)

export const Light = Template.bind({})
Light.args = {}
export const DARK = Template.bind({})
DARK.args = {}
DARK.decorators = [ThemeDecorator(Theme.DARK)]
