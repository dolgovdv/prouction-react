import {classNames} from 'shared/lib/classNames/classNames'
import {type FC} from 'react'
import i18n from 'i18next'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className = ''}) => {
    const {t} = useTranslation()
    const translate = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            type={'button'}
            onClick={translate}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.OUTLINE_SECONDARY}
        >
            {t('язык')}
        </Button>
    )
}
