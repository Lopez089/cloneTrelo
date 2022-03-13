import React from 'react'
import styled from 'styled-components'
import { Wrap } from '../element/wrap'
import { Badge } from '../components/Badge'
import { Flex } from '../element/flex'
import { Button } from '../element/button'
import { Avatar } from '../components/avatar'
import { MdOutlineAdd, MdOutlineMessage, MdOutlineAttachFile } from 'react-icons/md'
import { Grid } from '../element/grid'

export const StyledCard = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  max-width: 243px;
  min-height: 148px;

  p{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.035em;
    color: #000000;
  }
  .detail{
    color: #BDBDBD;
    font-size: 12px;
  }

  .detail p{
    margin :0;
    color:#BDBDBD;
    font-size: 12px;
  }
`

export const Card = () => {
  return (
    <StyledCard>
      <Wrap p='12px'>
        <p>✋🏿 Add what you'd like to work on below</p>
        <Grid p='0 0 24px 0' justifyContent='start'>
          <Badge>Concept</Badge>
        </Grid>
        <Flex justifyContent='space-between'>
          <Flex gap='8px'>
            <Avatar
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU'
              alt='user'
              name='XN'
            />
            <Avatar
              src='https://www.aiss.co/assets/front/fonts/app-assets/images/profile/user-uploads/user-13.jpg'
              alt='user'
              name='XN'
            />
            <Button color='primary' icon={<MdOutlineAdd />} />
          </Flex>
          <Grid className='detail' columns='1fr 1fr' gap='12px' alignItems='center'>
            <Flex gap='5px' alignItems='center'>
              <MdOutlineMessage />
              <p>3</p>
            </Flex>
            <Flex gap='5px' alignItems='center'>
              <MdOutlineAttachFile />
              <p>1</p>
            </Flex>
          </Grid>
        </Flex>
      </Wrap>
    </StyledCard>
  )
}
