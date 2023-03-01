import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {Modal} from 'shared/ui/Modal/Modal'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const ThemeLight = Template.bind({})
ThemeLight.args = {
    children: 'Modal',
    isOpen: true,
}

export const ThemeDark = Template.bind({})
ThemeDark.args = {
    children: 'Modal',
    isOpen: true,
}
ThemeDark.decorators = [ThemeDecorator(Theme.DARK)]
