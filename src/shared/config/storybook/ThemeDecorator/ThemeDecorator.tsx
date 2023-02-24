import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

// TODO: displayName
// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
)
