import React from 'react'
import { Dashboard } from '../../page/dashboard'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'page/dashboard',
  component: Dashboard,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const buttonDefautl = () => <Dashboard />
