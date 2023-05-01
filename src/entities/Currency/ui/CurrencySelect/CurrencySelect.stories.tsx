import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {CurrencySelect} from './CurrencySelect'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const PRIMARY = Template.bind({})
PRIMARY.args = {}

export const Small = Template.bind({})
Small.args = {}
Small.decorators = [ThemeDecorator(Theme.DARK)]
