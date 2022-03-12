import React from 'react'
import { List } from '../../components/list'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'Component/list',
  component: List,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const list = () => <List name='Backlog 🤔' />
