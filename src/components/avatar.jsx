import React from 'react'
import styled from 'styled-components'

export const StyledAvatar = styled.div`
    display: flex;
    width:32px;
    height:32px;
    background: #BDBDBD;
    border-radius: 8px;
    justify-content: center;='center';
    align-items: center;

  img{
    width:32px;
    height:32px;
    border-radius:8px;
  }

  p{
    
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.035em;
    color: #FFFFFF; 
    margin:0;
    padding:0;
  }
`

export const Avatar = ({ src, name, alt }) => {
  return (
    <StyledAvatar>
      {src
        ? <img src={src} alt={alt} name={name} />
        : <p>{name}</p>}
    </StyledAvatar>
  )
}
