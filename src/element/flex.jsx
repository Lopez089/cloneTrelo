import styled from 'styled-components'

export const Flex = styled.section`
  display:flex;
  justify-content: ${prop => prop.justifyContent};
  align-items: ${prop => prop.alignItems};
  gap: ${prop => prop.gap};

`
