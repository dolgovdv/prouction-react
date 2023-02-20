import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const onToggle = (): void => {
    setCollapsed(prevState => !prevState)
  }
  return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button type={'button'} onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
  )
}
