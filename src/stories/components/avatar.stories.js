import React from 'react'
import { Avatar } from '../../components/avatar'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'Component/avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const avatarPhoto = () => (
  <Avatar
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU'
    alt='user'
    name='XN'
  />)

export const avatarName = () => (
  <Avatar
    alt='user'
    name='XN'
  />)
