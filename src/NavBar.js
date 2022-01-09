import {useState} from 'react'
import styled from 'styled-components'

import {Button, CustomLink} from './ui'

const Menu = styled.div`
  display: flex;
  color: red;
  position: absolute;
    left: 0;
    top: 0;
  background-color: black;
`

const LinksList = styled.ul`
  padding: 0;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  ${CustomLink},
  ${Button} {
    text-transform: uppercase;

    margin-right: 8px;

    :last-child {
      margin-right: 0;
    }
  }
`

export function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false)

  function toggleMenu() {
    setIsMenuShown(!isMenuShown)
  }

  return (
    <Nav>
      <LinksList>
        <Button onClick={toggleMenu}>menu</Button>
        {isMenuShown && <Menu>This is the menu</Menu>}
        <CustomLink to='/'>logo</CustomLink>
        <CustomLink to='/shuffle'>shuffle</CustomLink>
        <CustomLink to='/get-app'>get app</CustomLink>
        <CustomLink to='/donate'>donate</CustomLink>
        <CustomLink to='/2022'>2022</CustomLink>
        <CustomLink to='/crypto'>crypto</CustomLink>
        <CustomLink to='/ask-brazil'>ask brazil</CustomLink>
        <CustomLink to='/chat'>chat</CustomLink>
        <CustomLink to='/motorbike'>motorbike</CustomLink>
        <CustomLink to='/confession'>confession</CustomLink>
      </LinksList>
      <LinksList>
        <Button>search</Button>
        <Button>notifications</Button>
        <Button>chat logo dymki</Button>
        <CustomLink to='/login'>login</CustomLink>
        <CustomLink to ='sign-up'>sign up</CustomLink>
      </LinksList>
    </Nav>
  )
}