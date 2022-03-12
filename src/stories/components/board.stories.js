import React from 'react'
import { Board } from '../../components/board'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'Component/board',
  component: Board,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const board = () => <Board />
