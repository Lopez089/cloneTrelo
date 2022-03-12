import React from 'react'
import { HeaderBoad } from '../../components/headerBoad'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'Component/headerBoad',
  component: HeaderBoad,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const headerBoad = () => <HeaderBoad />
