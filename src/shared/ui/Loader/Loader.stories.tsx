import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import 'app/styles/variables/global.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Loader } from './Loader'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
