import { type FC, useEffect, useState } from 'react'
import { Button, ThemeButtons } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

/**
 * Компонент для тестирования ErrorBoundary
 * @constructor
 */
export const BugButton: FC = () => {
  const { t } = useTranslation()
  const [error, setError] = useState<boolean>(false)
  const onThrow = (): void => { setError(true) }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
        <Button type={'button'} onClick={onThrow} theme={ThemeButtons.SECONDARY}>
            {t('Тест ErrorBoundary')}
        </Button>
  )
}
