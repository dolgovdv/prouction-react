import {type Story} from '@storybook/react'
import {ThemeProvider, type Theme} from 'app/providers/ThemeProvider'

// TODO: displayName, разобраться почему не переключается иконка "темы"
// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.body.className = theme
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
}
