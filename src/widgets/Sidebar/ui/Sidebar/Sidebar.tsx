import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {type FC, useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className = ''}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onToggle = (): void => {
        setCollapsed((prevState) => !prevState)
    }
    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [
                className,
            ])}
        >
            <Button
                data-testid='sidebar-toggle'
                type='button'
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_SECONDARY}
                square={true}
                size='size_xl'
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} shortsName={collapsed} />
            </div>
        </div>
    )
}
