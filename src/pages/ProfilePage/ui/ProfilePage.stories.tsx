import {ProfilePage} from './ProfilePage'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import avatar from 'shared/assets/test/avatar.png'
// TODO: не делаются скриншоты
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                city: 'Moscow',
                age: 33,
                country: Country.Russia,
                lastname: 'Улби',
                first: 'Тимур',
                currency: Currency.RUB,
                avatar,
            },
        },
    }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                city: 'Moscow',
                age: 33,
                country: Country.Russia,
                lastname: 'Улби',
                first: 'Тимур',
                currency: Currency.RUB,
                avatar,
            },
        },
    }),
]
