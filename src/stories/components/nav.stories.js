import React from 'react'
import { GlobalStyle } from '../../globalStyled'
import { Brand } from '../../components/brand'
import { P } from '../../element/p'
import { Button } from '../../element/button'
import { MdOutlineGridView } from 'react-icons/md'
import { Hr } from '../../element/hr'
import { Input } from '../../element/input'
import { NavUser } from '../../components/navUser'

const Nav = () => {
  return (
    <nav>
      <section>
        <Brand />
      </section>
      <section>
        <div>
          <P nameBoard>Devchallenges Board</P>
          <Hr />
          <Button icon={<MdOutlineGridView />}>All board</Button>
        </div>
        <div>
          <Input />
        </div>
      </section>
      <section>
        <NavUser />
      </section>
    </nav>
  )
}

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
