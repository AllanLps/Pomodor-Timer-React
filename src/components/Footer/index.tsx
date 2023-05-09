import { FooterContainer } from './styles'
import coracao from '../../assets/coracao.png'

export function Footer() {
  return (
    <FooterContainer>
      <p>
        Feito com <img src={coracao} alt="Icone de coração em pixel" /> por{' '}
        <a href="https://github.com/AllanLps" target="_blank" rel="noreferrer">
          Allan Lopes
        </a>
      </p>
    </FooterContainer>
  )
}
