import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { type ReactNode } from 'react'

export const RouterDecorator = (story: () => Story): ReactNode => {
  return (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
  )
}
