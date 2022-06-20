import styled from "styled-components"

const Title = styled.h6`
  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.panelTitleColor};
`

const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>
}

export default SectionTitle
