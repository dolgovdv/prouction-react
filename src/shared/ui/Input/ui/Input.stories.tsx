import {Input} from 'shared/ui/Input'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const ThemeLight = Template.bind({})
ThemeLight.args = {}

export const OutlineSecondaryDark = Template.bind({})
OutlineSecondaryDark.args = {}
OutlineSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
