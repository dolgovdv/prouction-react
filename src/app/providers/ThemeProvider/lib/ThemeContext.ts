import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: (prevState: Theme) => Theme.DARK | Theme.LIGHT) => void

}
export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
