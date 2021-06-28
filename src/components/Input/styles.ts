import styled, { keyframes } from 'styled-components'

const ballsAnimation = keyframes`
   0% {
    transform: scale(1);
    opacity: 1;
  }
  16% {
    transform: scale(0.1);
    opacity: 0.7;
  }
  33% {
    transform: scale(1);
    opacity: 1;
  }
`

export const Container = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.32);
  border-radius: 0.25rem;
  width: 23rem;
  padding: 0.7rem 1rem;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 100%;
  }

  input {
    background: transparent;
    border: 0;
    color: #ffffff;
    font-size: 1rem;
  }

  label {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media screen and (max-width: 350px) {
      max-width: 7rem;
    }
  }

  button {
    background: #ffffff;
    border-radius: 2.75rem;
    color: rgba(178, 46, 111, 1);
    width: 5.313rem;
    height: 2.25rem;
    border: 0;

    &[disabled] {
      background: #cacaca;
    }
  }
`

export const LoadingBalls = styled.div`
  div {
    display: inline-block;
    background-color: rgba(178, 46, 111, 1);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    margin: 0 0.25rem;
    animation: ${ballsAnimation} both linear infinite;
  }

  div:nth-child(1) {
    animation-duration: 0.75s;
    animation-delay: 0;
  }
  div:nth-child(2) {
    animation-duration: 0.75s;
    animation-delay: 0.12s;
  }
  div:nth-child(3) {
    animation-duration: 0.75s;
    animation-delay: 0.24s;
  }
`
