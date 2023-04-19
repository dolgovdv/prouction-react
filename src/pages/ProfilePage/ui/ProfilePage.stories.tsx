import {ProfilePage} from 'pages/ProfilePage'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const ThemeLight = Template.bind({})
ThemeLight.args = {}
ThemeLight.decorators = [StoreDecorator({})]
