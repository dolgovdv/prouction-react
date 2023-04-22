import {useContext} from 'react'
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeContextProps} from './ThemeContext'

interface UseThemeResult {
    theme?: Theme
    toggleTheme: () => void
}
export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext<ThemeContextProps>(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
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
