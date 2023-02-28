import {classNames} from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import {type FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({className = ''}) => {
    const {t} = useTranslation()
    const reloadPage = (): void => {
        location.reload()
    }
    return (
        <div className={classNames(cls.pageerror, {}, [className])}>
            <p>{t('Что - то пошло не так.')}</p>
            <Button
                type={'button'}
                onClick={reloadPage}
                className={classNames('', {}, [className])}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
