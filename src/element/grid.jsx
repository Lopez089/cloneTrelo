import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${prop => prop.columns};
  grid-template-rows: ${prop => prop.row};
  justify-content: ${prop => prop.justifyContent};
  align-items: ${prop => prop.alignItems};
  gap: ${prop => prop.gap};
  background: ${prop => prop.bg};
  color: ${prop => prop.color};
  padding: ${prop => prop.p}
  `
