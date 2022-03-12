import React from 'react'
import styled from 'styled-components'
import { Wrap } from '../element/wrap'
import { Grid } from '../element/grid'

export const StyledBoard = styled.div`
    background: #F8F9FD;
    border-radius: 24px;
    min-height: 100vh;
`

export const Board = () => {
  return (
    <StyledBoard>
      <Wrap p='24px'>
        <Grid columns='1fr 1fr 1fr 1fr'>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
          <div>Board</div>
        </Grid>
      </Wrap>
    </StyledBoard>
  )
}
