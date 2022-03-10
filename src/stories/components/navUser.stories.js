import React from 'react'
import { NavUser } from '../../components/navUser'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'Component/NavUser',
  component: NavUser,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const navUser = () => <NavUser />
