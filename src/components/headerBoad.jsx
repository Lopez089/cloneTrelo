import React from 'react'
import { Wrap } from '../element/wrap'
import { Grid } from '../element/grid'
import { Flex } from '../element/flex'
import { Button } from '../element/button'
import { MdLock, MdMoreHoriz, MdOutlineAdd } from 'react-icons/md'
import { Avatar } from '../components/avatar'

export const HeaderBoad = () => {
  return (
    <>
      <Wrap p='35px'>
        <Grid columns='1fr 1fr'>
          <Flex gap='16px'>
            <Button icon={<MdLock />}>Private</Button>
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
            <Avatar
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU'
              alt='user'
              name='XN'
            />
            <Avatar
              alt='user'
              name='TN'
            />
            <Button color='primary' icon={<MdOutlineAdd />} />
          </Flex>
          <Flex justifyContent='end'>
            <Button icon={<MdMoreHoriz />}>Show Menu</Button>
          </Flex>
        </Grid>
      </Wrap>
    </>
  )
}
