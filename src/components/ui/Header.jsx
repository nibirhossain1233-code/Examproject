import React from 'react'
import Image from '../common/Image'
import Container from './Container'

const Header = () => {
  return (
    <header>
        <nav>
            <Container>
            <Image src="images/logo.png" alt="logo" />

            </Container>
        </nav>
        <Container/>
    </header>
  )
}

export default Header