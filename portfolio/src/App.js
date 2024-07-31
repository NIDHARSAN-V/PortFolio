import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import {BrowserRouter, Router} from "react-router-dom"
import { darkTheme } from './Utils/Themes'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Section/HeroSection'



const Body = styled.div`
background-color: ${({theme}) =>theme.bg};
/* background-color: red; */
width: 100%;
/* overflow-x: hidden; */
height: 90vh;
color: ${({theme}) => theme.text_primary};
/* border: 1px solid red;             /////////////////extra */


`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
       <Navbar/>
       <Body>
          <HeroSection/>
       </Body>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
