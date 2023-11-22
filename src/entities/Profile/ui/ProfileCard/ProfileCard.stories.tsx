import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import {ProfileCard} from './ProfileCard'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import avatar from 'shared/assets/test/avatar.png'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        username: 'admin',
        city: 'Moscow',
        age: 33,
        country: Country.Russia,
        lastname: 'Улби',
        first: 'Тимур',
        currency: Currency.RUB,
        avatar,
    },
}

export const WithError = Template.bind({})
WithError.args = {error: 'true'}

export const IsLoading = Template.bind({})
IsLoading.args = {isLoading: true}
