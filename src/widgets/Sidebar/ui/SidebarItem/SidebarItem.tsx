import cls from './SidebarItem.module.scss'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {useTranslation} from 'react-i18next'
import {type SidebarItemType} from 'widgets/Sidebar/model/items'
import {memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps): JSX.Element => {
    const {item, collapsed = false} = props
    const {t} = useTranslation()
    return (
        <AppLink to={item?.path} className={classNames(cls.item, {[cls.collapsed]: collapsed})}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    )
})

SidebarItem.displayName = 'SidebarItem'
