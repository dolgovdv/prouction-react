import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButtons } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()

  return (
        <Button type={'button'}
                theme={ThemeButtons.CLEAR}
                className={classNames('', {}, [className])}
                onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
  )
}
