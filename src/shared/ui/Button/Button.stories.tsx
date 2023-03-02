import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ThemeLight = Template.bind({})
ThemeLight.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
}

export const ThemeDark = Template.bind({})
ThemeDark.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
}
ThemeDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareL = Template.bind({})
SquareL.args = {
    children: '>',
    size: 'size_l',
    theme: ButtonTheme.BACKGROUND,
    square: true,
}

export const SquareLDark = Template.bind({})
SquareLDark.args = {
    children: '>',
    size: 'size_l',
    theme: ButtonTheme.BACKGROUND,
    square: true,
}
SquareLDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineSecondaryLight = Template.bind({})
OutlineSecondaryLight.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE_SECONDARY,
}

export const OutlineSecondaryDark = Template.bind({})
OutlineSecondaryDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE_SECONDARY,
}
OutlineSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
