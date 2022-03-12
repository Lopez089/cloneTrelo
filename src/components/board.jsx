import React from 'react'
import styled from 'styled-components'
import { Wrap } from '../element/wrap'
import { Grid } from '../element/grid'
import { List } from '../components/list'

export const StyledBoard = styled.div`
    background: #F8F9FD;
    border-radius: 24px;
    min-height: 100vh;
    min-width: 100%;
`

export const Board = () => {
  return (
    <StyledBoard>
      <Wrap p='24px'>
        <Grid columns='1fr 1fr 1fr 1fr' gap='30px'>
          <List name='Backlog 🤔' />
          <List name='In Progress 📚' />
          <List name='In Review ⚙️' />
          <List />
        </Grid>
      </Wrap>
    </StyledBoard>
  )
}
