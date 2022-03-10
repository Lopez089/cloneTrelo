import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background: #F2F2F2;
  border-radius: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.035em;
  text-align: left;
  padding:7px 19px;
  border:none;
  color:#828282;

  svg{
    color:#828282;
    padding: 0 13px 0 0;
  }

  ${prop => prop.color === 'primary'
    ? css`
      background:#2F80ED;
      color:#FFFFFF;
    `
    : null
  }
  
`

export const Button = ({ children, icon, color }) => {
  return (
    <>
      <StyledButton color={color}>
        {icon || null}
        {children}
      </StyledButton>
    </>
  )
}
