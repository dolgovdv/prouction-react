import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}
export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext<ThemeContextProps>(ThemeContext)

    const toggleTheme = () => {
        setTheme((prevState: Theme) => {
            const newTheme = prevState === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
            return newTheme
        })
    }

    return {theme, toggleTheme}
}