import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {FC} from "react";
import i18n from "i18next";
import {Button, ThemeButtons} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";


interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {t} = useTranslation()
    const translate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button type={"button"}
                onClick={translate}
                className={classNames(cls.langswitcher, {}, [className])}
                theme={ThemeButtons.SECONDARY}>
            {t('язык')}
        </Button>
    );
};