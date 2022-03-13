import styled from 'styled-components'

export const Flex = styled.section`
  display:flex;
  justify-content: ${prop => prop.justifyContent};
  align-items: ${prop => prop.alignItems};
  gap: ${prop => prop.gap};
  width: ${prop => prop.w};
  height: ${prop => prop.h};
  flex-direction: ${prop => prop.flexDirection};
`
