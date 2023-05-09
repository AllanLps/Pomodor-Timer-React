import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 15px;
  }

  a {
    color: ${(props) => props.theme['purple-500']};
    font-weight: bold;
    text-decoration: none;
  }
`
