import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {type FC, memo, useMemo, useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {SidebarItemsList} from 'widgets/Sidebar/model/items'
import {SidebarItem} from '../SidebarItem/SidebarItem'
import PropTypes from 'prop-types'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({className = ''}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onToggle = (): void => {
        setCollapsed((prevState) => !prevState)
    }

    const itemList = useMemo(
        () =>
            SidebarItemsList.map((item) => {
                return <SidebarItem key={item.path} item={item} collapsed={collapsed} />
            }),
        [collapsed]
    )
    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <div className={cls.items}>{itemList}</div>
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
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
})

Sidebar.displayName = 'Sidebar'
Sidebar.propTypes = {className: PropTypes.string}
