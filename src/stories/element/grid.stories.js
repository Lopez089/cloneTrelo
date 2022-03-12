import React from 'react'
import { Grid } from '../../element/grid'
import { GlobalStyle } from '../../globalStyled'

export default {
  title: 'element/grid',
  component: Grid,
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    )
  ]
}

export const gridColumnTwoAndRowTwo = () => (
  <Grid columns='1fr 1fr' row='1fr 1fr' gap='30px'>
    <Grid bg='#2F80ED' color='#fff' justifyContent='center' alignItems='center'>1</Grid>
    <Grid bg='#2F80ED' color='#fff' justifyContent='center' alignItems='center'>2</Grid>
    <Grid bg='#2F80ED' color='#fff' justifyContent='center' alignItems='center'>3</Grid>
    <Grid bg='#2F80ED' color='#fff' justifyContent='center' alignItems='center'>4</Grid>
  </Grid>

)
