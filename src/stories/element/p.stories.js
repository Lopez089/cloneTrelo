import React from 'react'
import { P } from '../../element/p'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'Element/P',
  component: P,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const Default = () => <P>Default</P>
export const NameBoard = () => <P nameBoard>Devchallenges Board</P>
