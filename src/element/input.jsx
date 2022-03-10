import styled from 'styled-components'
import { Button } from '../element/button'

export const StyledInput = styled.input`
    width: 338px;
    border-radius:8px;
    border:none;
    padding: 9px 0 9px 13px;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.035em;
    color:#333333;
    ::placeholder{
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        letter-spacing: -0.035em;
        color: #BDBDBD;
    }
`

export const ContainerInput = styled.form`
  position: relative;
  width: max-content;

  button{
    position: absolute;
    right: 2px; 
    top: 2px;
    bottom: 2px;
    z-import:2;
  }
`

export const Input = ({ placeholder }) => {
  return (
    <ContainerInput>
      <StyledInput placeholder={placeholder} />
      <Button color='primary'>Search</Button>
    </ContainerInput>
  )
}
