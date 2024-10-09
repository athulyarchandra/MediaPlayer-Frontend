import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar style={{zIndex:1}} className=" w-100 bg-info position-fixed">
    <Container>
      <Navbar.Brand>
        <Link style={{textDecoration:'none',color:'white',fontWeight:'600'}} to={'/'}>
        <i className='fa-solid fa-music me-2'></i>{' '}
       Media Player
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header