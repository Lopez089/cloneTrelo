import React from 'react'
import { Button } from '../../element/button'
import { GlobalStyle } from '../../globalStyled'
import { MdOutlineGridView, MdOutlineAdd } from 'react-icons/md'

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
export const buttonPrimary = () => <Button color='primary'>Search</Button>
export const buttonOnlyIcon = () => <Button icon={<MdOutlineAdd />} color='primary' />
export const buttonAdd = () => <Button add icon={<MdOutlineAdd />}>Add another card</Button>
