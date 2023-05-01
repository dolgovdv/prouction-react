import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {CountrySelect} from './CountrySelect'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const PRIMARY = Template.bind({})
PRIMARY.args = {}

export const Small = Template.bind({})
Small.args = {}
Small.decorators = [ThemeDecorator(Theme.DARK)]
