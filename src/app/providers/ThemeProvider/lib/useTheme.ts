import {useContext} from 'react'
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeContextProps} from './ThemeContext'

interface UseThemeResult {
    theme?: Theme
    toggleTheme: () => void
}
export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext<ThemeContextProps>(ThemeContext)

    const toggleTheme = (): void => {
        let newTheme: Theme
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.ORANGE
                break
            case Theme.ORANGE:
                newTheme = Theme.DARK
                break
            default:
                newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme)
        /**
         * передаем тему сразу в body.
         * применяется для всех компонентов,
         * но не работает анимация перехода
         */
        // document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}
