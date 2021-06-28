import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  .fontIoasys-bold {
    font-family: 'Heebo', sans-serif;
    font-weight: 700;
  }

  .fontIoasys-medium {
    font-family: 'Heebo', sans-serif;
    font-weight: 500;
  }

  .fontIoasys-regular {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }

  .fontIoasys-light {
    font-family: 'Heebo', sans-serif;
    font-weight: 300;
  }


  html {
    font-size: 16px;
  }

  input::placeholder {
    color: #ffffff;
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-box-shadow: 0 0 0px 1000px #fff0 inset;
      -webkit-text-fill-color: white;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-family: 'Heebo', sans-serif;
    font-weight: 500;
    font-size: 3rem;
  }

  h2 {
    font-family: 'Heebo', sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
  }

  h3 {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    font-size: 2rem;
  }

  h4 {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    font-size: 1.75rem;
  }

  h5 {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
  }

  h6 {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }

  a, span {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }

  button {
    font-family: 'Heebo', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  p {
    font-family: 'Heebo', sans-serif;
    font-weight: 300;
  }
`
