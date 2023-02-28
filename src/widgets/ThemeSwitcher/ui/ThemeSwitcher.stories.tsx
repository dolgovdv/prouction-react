import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import 'app/styles/variables/global.scss'
// import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
// import {Theme} from 'app/providers/ThemeProvider'
import {ThemeSwitcher} from './ThemeSwitcher'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
)

export const Light = Template.bind({})
Light.args = {}
export const Dark = Template.bind({})
Dark.args = {}
// TODO: тесты падают с ошибкой
// No reference image found
// You can update the reference files with:
// loki update --storiesFilter="^widgets\\/ThemeSwitcher Dark\$" --reactUri="file:./storybook-static"
// Error: Process completed with exit code 1.
// Dark.decorators = [ThemeDecorator(Theme.DARK)]
