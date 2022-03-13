import React from 'react'
import { Badge } from '../../components/Badge'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'Component/badge',
  component: Badge,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const badge = () => <Badge>Concept</Badge>
