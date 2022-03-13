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

export const cardWithoutPicture = () => <Card />
export const cardWithPicture = () => (
  <Card
    img='https://images.unsplash.com/photo-1606602842475-a5852a58b399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
  />)
