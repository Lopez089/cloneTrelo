import React from 'react'
import { Flex } from '../element/flex'
import { MdMoreHoriz, MdOutlineAdd } from 'react-icons/md'
import styled from 'styled-components'
import { Button } from '../element/button'

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

      <Button add icon={<MdOutlineAdd />}>Add another card</Button>
    </StyledList>
  )
}
