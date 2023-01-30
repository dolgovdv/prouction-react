import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {FC, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = () => {
      setCollapsed(prevState => !prevState)
    }
    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button type={"button"} onClick={onToggle}>toggle</button>
            <div className={cls.switcher}>
                <ThemeSwitcher/>
                {/*<LangSwitcher/>*/}
            </div>
        </div>
    );
};