import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'

import {devicesWidth} from './ui'

import {NavBar} from './NavBar'

const Container = styled.div`
  display: flex;
  direction: column;
  width: 100%;

  @media (min-width: ${devicesWidth.big}) {
    margin: 0 auto;
    width: 1280px;
  }
`

export function App() {
  return (
    <Container>
      <NavBar/>
      <Routes>
        <Route path='/2022' element={<span>2022 mitch</span>}/>
      </Routes>
    </Container>
  );
}

//sss