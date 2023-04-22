import {Text} from 'shared/ui/Text'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {TextTheme} from 'shared/ui/Text/ui/Text'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const ThemeLight = Template.bind({})
ThemeLight.args = {
    title: 'title',
    text: 'text',
}
export const DarkLight = Template.bind({})
DarkLight.args = {
    title: 'title',
    text: 'text',
}
DarkLight.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
    title: 'title',
    text: 'text',
    theme: TextTheme.ERROR,
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'title eslint-disable-next-line @typescript-eslint/consistent-type-assertions',
}

export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'text eslint-disable-next-line @typescript-eslint/consistent-type-assertions',
}
