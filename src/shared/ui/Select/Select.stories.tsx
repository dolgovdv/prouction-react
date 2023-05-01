import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Select} from './Select'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const PRIMARY = Template.bind({})
PRIMARY.args = {
    label: 'Значение',
    options: [
        {value: '123', content: 'first'},
        {value: '222', content: 'second'},
    ],
}

export const Small = Template.bind({})
Small.args = {
    label: 'Значение',
    options: [
        {value: '123', content: 'first'},
        {value: '222', content: 'second'},
    ],
}
Small.decorators = [ThemeDecorator(Theme.DARK)]
