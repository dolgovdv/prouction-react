import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Button, ThemeButtons } from './Button'

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

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  theme: ThemeButtons.SECONDARY
}
