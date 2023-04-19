import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import {SidebarItem} from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'shared/SidebarItem',
    component: SidebarItem,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof SidebarItem>

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />

export const ThemeLight = Template.bind({})
ThemeLight.args = {}
