import React from 'react'
import { Hr } from '../../element/hr'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'element/hr',
  component: Hr,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const hr = () => <Hr />
