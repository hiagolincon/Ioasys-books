import styled, { keyframes } from 'styled-components'
import bg from './assets/background.jpg'

const animationButtonSignOut = keyframes`
  0% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 1rem 0;

  background: url(${bg}) no-repeat;
  background-size: cover;

  footer {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
      justify-content: center;

      .btnBackPage {
        order: -1;
      }

      .btnNextPage {
        order: 1;
        margin: 0;
      }

      p {
        order: 0;
        margin: 0 1rem;
      }
    }

    div {
      display: flex;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 0.063rem solid rgba(51, 51, 51, 0.2);
      margin-left: 1rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      &[disabled] {
        svg path {
          stroke: rgba(51, 51, 51, 0.4);
        }
      }
    }

    p,
    b {
      font-size: 0.75rem;
      color: #333333;
    }
  }

  > section {
    width: 100%;
    max-width: 1130px;
    margin: 0 auto;

    @media screen and (max-width: 1130px) {
      padding: 0 3rem;
    }

    @media screen and (max-width: 440px) {
      padding: 0 1rem;
    }

    section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      justify-items: center;
    }
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 3.125rem;
    justify-content: space-between;
    width: 100%;

    div {
      display: flex;
      align-items: center;
    }

    .logoContainer {
      p {
        font-size: 1.75rem;
        margin-left: 1rem;
        color: #333333;
      }

      svg path {
        fill: #333333;
      }
    }

    .signOutContainer {
      display: flex;
      align-items: center;

      .welcome {
        @media screen and (max-width: 440px) {
          display: none;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: 0.063rem solid rgba(51, 51, 51, 0.2);
        margin-left: 1rem;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        transition: transform 0.4s;

        &:hover {
          animation: ${animationButtonSignOut} 0.4s;
        }
      }

      p,
      b {
        font-size: 0.75rem;
        color: #333333;
      }
    }
  }
`
