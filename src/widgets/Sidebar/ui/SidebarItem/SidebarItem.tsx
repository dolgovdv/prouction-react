import cls from './SidebarItem.module.scss'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {useTranslation} from 'react-i18next'
import {type SidebarItemType} from 'widgets/Sidebar/model/items'
import {memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useSelector} from 'react-redux'
import {getUserAuthData} from 'entities/User'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps): JSX.Element | null => {
    const {item, collapsed = false} = props
    const {t} = useTranslation()

    const isAuth = useSelector(getUserAuthData)
    if (item.authOnly === true && isAuth == null) {
        return null
    }
    return (
        <AppLink to={item?.path} className={classNames(cls.item, {[cls.collapsed]: collapsed})}>
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    )
})

SidebarItem.displayName = 'SidebarItem'
