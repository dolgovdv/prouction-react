import {useContext} from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
    type ThemeContextProps,
} from './ThemeContext'

interface UseThemeResult {
    theme: Theme | undefined
    toggleTheme: () => void
}
export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext<ThemeContextProps>(ThemeContext)

    const toggleTheme = (): void => {
        if (setTheme != null) {
            setTheme((prevState: Theme) => {
                const newTheme =
                    prevState === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
                localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
                return newTheme
            })
        }
    }

    return {theme, toggleTheme}
}
