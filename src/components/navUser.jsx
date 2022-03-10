import React from 'react'
import styled from 'styled-components'
import { MdArrowDropDown } from 'react-icons/md'
import { IconContext } from 'react-icons'

export const ContainerNavUser = styled.div`
  width: 160px;
  display:flex;
  align-items: center;
  justify-content: space-between;

  p{

    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.035em;
    color: #333333;
  }

  img{
    width:32px;
    height:32px;
    border-radius:8px;
  }

`

export const NavUser = () => {
  return (
    <ContainerNavUser>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU' alt='user' />
      <p>Xanthe Neal</p>
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <MdArrowDropDown />
      </IconContext.Provider>
    </ContainerNavUser>
  )
}
