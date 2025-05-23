import { useState, useEffect } from 'react'
import { Container, Menu, Li, MobileMenuButton } from './styles'
import Logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      if (!changeBackground && window.pageYOffset > 150) {
        setChangeBackground(true)
      } else if (changeBackground && window.pageYOffset <= 150) {
        setChangeBackground(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [changeBackground])

  // Fecha o menu mobile ao navegar
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo-dev-movies" />

      <Menu isOpen={isOpen}>
        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes('filmes')}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>

      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        <div style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ opacity: isOpen ? 0 : 1 }} />
        <div style={{ transform: isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none' }} />
      </MobileMenuButton>
    </Container>
  )
}

export default Header
