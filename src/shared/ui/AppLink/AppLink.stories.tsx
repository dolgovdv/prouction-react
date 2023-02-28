import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {AppLink, AppLinkTheme} from './AppLink'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const PRIMARY = Template.bind({})
PRIMARY.args = {
    children: 'Button',
    theme: AppLinkTheme.PRIMARY,
}
PRIMARY.decorators = [ThemeDecorator(Theme.DARK)]

export const SECONDARY = Template.bind({})
SECONDARY.args = {
    children: 'Button',
    theme: AppLinkTheme.SECONDARY,
}
