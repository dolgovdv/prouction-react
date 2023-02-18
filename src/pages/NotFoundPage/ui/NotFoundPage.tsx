import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { type FC } from 'react'
import { t } from 'i18next'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className = '' }) => {
  return (
        <div className={classNames(cls.notfoundpage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
  )
}
