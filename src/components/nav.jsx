import styled from 'styled-components'
import { Brand } from '../components/brand'
import { P } from '../element/p'
import { Button } from '../element/button'
import { MdOutlineGridView } from 'react-icons/md'
import { Hr } from '../element/hr'
import { Input } from '../element/input'
import { NavUser } from '../components/navUser'
import { Grid } from '../element/grid'
import { Flex } from '../element/flex'

export const StyledNav = styled.nav`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
`

export const Nav = () => {
  return (
    <StyledNav>
      <Grid columns='1fr 10fr 1fr' justifyContent='center' alignItems='center'>
        <section>
          <Brand />
        </section>
        <Flex justifyContent='space-around'>
          <Flex alignItems='center' gap='22px'>
            <P nameBoard>Devchallenges Board</P>
            <Hr />
            <Button icon={<MdOutlineGridView />}>All board</Button>
          </Flex>
          <Flex alignItems='center'>
            <Input placeholder='Keyword...' />
          </Flex>
        </Flex>
        <Flex>
          <NavUser />
        </Flex>
      </Grid>
    </StyledNav>
  )
}
