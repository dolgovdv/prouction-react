import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

export const AboutPage: FC = () => {
  const { t } = useTranslation(['about'])
  return (
        <div>
            {t('О приложении')}
        </div>
  )
}
