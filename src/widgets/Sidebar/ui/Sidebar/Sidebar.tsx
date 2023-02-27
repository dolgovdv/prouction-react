import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {type FC, useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {useTranslation} from 'react-i18next'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className = ''}) => {
    const {t} = useTranslation()
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
            <div className={cls.items}>
                <AppLink to={'/'} className={cls.item}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Main')}</span>
                </AppLink>

                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('About')}</span>
                </AppLink>

                {/* <div className={cls.item}> */}
                {/*    <AboutIcon className={cls.icon} /> */}
                {/*    <AppLink */}
                {/*        theme={AppLinkTheme.SECONDARY} */}
                {/*        to={'/about'} */}
                {/*        className={cls.link} */}
                {/*    > */}
                {/*        {t('About')} */}
                {/*    </AppLink> */}
                {/* </div> */}
            </div>
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
