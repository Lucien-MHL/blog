import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyle

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <GlobalStyle />
    <App tab='home' />
  </>
)
