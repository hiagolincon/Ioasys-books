import styled, { css } from 'styled-components'
import bg from './assets/background.jpg'

export const Container = styled.main<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 3rem;
  min-height: 100vh;

  background: url(${bg}) no-repeat;
  background-size: cover;

  @media screen and (max-width: 425px) {
    background-position: -32rem;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 3.125rem;

    p {
      font-size: 1.75rem;
      margin-left: 1rem;
      color: #ffffff;
    }
  }

  .inputContainer + .inputContainer {
    margin-top: 1rem;
  }

  section {
    position: relative;

    @media screen and (max-width: 768px) {
      margin: auto;
    }

    ${({ hasError }) =>
      !hasError &&
      css`
        &::after,
        &::before {
          opacity: 0;
        }
      `}

    &::after {
      content: 'Email e/ou senha incorretos.';
      position: absolute;
      bottom: -4rem;
      left: 0;
      width: 14.938rem;
      height: 3rem;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Heebo', sans-serif;
      font-weight: 700;
      color: #ffff;
      transition: opacity 0.4s;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 1rem;
      width: 0;
      height: 0;
      border-left: 0.6rem solid transparent;
      border-right: 0.6rem solid transparent;
      border-bottom: 0.6rem solid rgba(255, 255, 255, 0.4);
      transition: opacity 0.4s;
    }
  }
`
