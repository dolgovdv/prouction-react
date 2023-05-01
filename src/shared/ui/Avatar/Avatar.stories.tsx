import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Avatar} from './Avatar'
import AvatartImg from './avatar.png'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const PRIMARY = Template.bind({})
PRIMARY.args = {size: 150, src: AvatartImg, alt: 'test'}

export const Small = Template.bind({})
Small.args = {size: 50, src: AvatartImg, alt: 'test'}
Small.decorators = [ThemeDecorator(Theme.DARK)]
