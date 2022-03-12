import React from 'react'
import { Flex } from '../../element/flex'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'element/flex',
  component: Flex,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const flex = () => <Flex justifyContent='center'>Center</Flex>
