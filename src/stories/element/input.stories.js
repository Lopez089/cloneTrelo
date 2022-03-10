import React from 'react'
import { Input } from '../../element/input'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'element/input',
  component: Input,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const Search = () => <Input placeholder='Keyword...' />
