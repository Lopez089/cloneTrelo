import React from 'react'
import { Card } from '../../components/card'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'Component/card',
  component: Card,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const card = () => <Card />
