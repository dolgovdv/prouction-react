import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import 'app/styles/variables/global.scss'
import { Button, ThemeButtons } from 'shared/ui/Button/Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text'
}
export const Clear = Template.bind({})
Clear.args = {
  children: 'Button',
  theme: ThemeButtons.CLEAR
}
Clear.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  theme: ThemeButtons.SECONDARY
}
