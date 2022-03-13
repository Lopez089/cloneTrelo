import React from 'react'
import { Flex } from '../element/flex'
import { MdMoreHoriz, MdOutlineAdd } from 'react-icons/md'
import styled from 'styled-components'
import { Button } from '../element/button'
import { Card } from '../components/card'

export const StyledList = styled.div`
    width: 243px;

    p{
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.035em;
      color: #333333;
    }

    svg{
      color: #828282;
    }
`

export const List = ({ name }) => {
  return (
    <StyledList>
      {
        name
          ? (
            <Flex justifyContent='space-between' alignItems='center'>
              <p>{name}</p>
              <MdMoreHoriz />
            </Flex>)
          : null

      }
      <Flex gap='24px' flexDirection='column'>
        <Card />
        <Card img='https://images.unsplash.com/photo-1606602842475-a5852a58b399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80' />
        <Card img='https://images.unsplash.com/photo-1606602842475-a5852a58b399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80' />
        <Button add icon={<MdOutlineAdd />}>Add another card</Button>
      </Flex>

    </StyledList>
  )
}
