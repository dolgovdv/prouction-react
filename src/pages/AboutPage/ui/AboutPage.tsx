import { useTranslation } from 'react-i18next'
import { type FC } from 'react'
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton'

export const AboutPage: FC = () => {
  const { t } = useTranslation(['about'])
  return (
        <div>
            {t('О приложении')}
            <BugButton/>
        </div>
  )
}
