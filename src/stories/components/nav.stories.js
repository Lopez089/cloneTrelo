import React from 'react'
import { logo } from '../../Logo.svg'

const Nav = () => {
  return (
    <nav>
      <section>
        {logo}
      </section>
      <section>
        <div>
          <p>Devchallenges Board</p>
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
  title: 'nav',
  component: Nav
}

export const Navigate = () => <Nav />
