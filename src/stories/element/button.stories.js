import React from 'react'
import { Button } from '../../element/button'
import { GlobalStyle } from '../../globalStyled'
import { MdOutlineGridView } from 'react-icons/md'

export default {
  title: 'element/button',
  component: Button,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const buttonDefautl = () => <Button>Default</Button>
export const buttonIcon = () => <Button icon={<MdOutlineGridView />}>All board</Button>
