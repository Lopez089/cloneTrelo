import styled, { css } from 'styled-components'

export const P = styled.p`
  ${(prop) =>
    prop.nameBoard
      ? css`
      color:#333333;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: -0.035em;
      text-align: left;
      `
      : null

  }

`
