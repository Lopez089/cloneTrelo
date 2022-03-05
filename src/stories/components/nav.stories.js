import React from 'react'
import { GlobalStyle } from '../../globalStyled'
import { Brand } from '../../components/brand'
import { P } from '../../element/p'

const Nav = () => {
  return (
    <nav>
      <section>
        <Brand />
      </section>
      <section>
        <div>
          <P nameBoard>Devchallenges Board</P>
          <br />
          <button>All board</button>
        </div>
        <div>
          <form>
            <input type='text' />
            <button>Search</button>
          </form>
        </div>
      </section>
      <section>
        <div>
          <img src='https://www.pikpng.com/pngl/m/326-3261783_person-icon-default-user-image-jpg-clipart.png' alt='user' />
          <p>Xanthe Neal</p>
        </div>
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
