import React from 'react'
import { Nav } from '../../components/nav'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'Component/nav',
  component: Nav,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const Navigate = () => <Nav />
