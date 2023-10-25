import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  
  }

  html,
  :root {
    width: 100%;
    min-height: 100vh;
  }

  button,
  a {
    cursor: pointer;
  }

  a, li{
    text-decoration: none;
    list-style: none;
  }

  button,
  input {
    outline: none;
  }

`
