import 'app/styles/index.scss'
import { type Story } from '@storybook/react/types-7-0'

export const StyleDecorator = (story: () => Story): Story => {
  return story()
}
