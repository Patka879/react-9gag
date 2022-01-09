import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled.button`
  background: transparent;
  border: none;
`

export const CustomLink = styled(Link)`
  font-weight: 700;
  
  :link,
  :visited {
    color: black;
  }
`

export const fontSize = {
  small: '11px',
  medium: '14px',
  big: '18px'
}

export const devicesWidth = {
  medium: '1024px',
  big: '1280px'
}