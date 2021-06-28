import styled from 'styled-components'
import quotes from './assets/quotes.svg'

export const Container = styled.section`
  display: flex;
  padding: 3rem;
  padding-right: 0;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    justify-content: flex-start;
  }

  div {
    padding-right: 3rem;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }

  img {
    width: 100%;
    max-width: 22rem;
    margin-right: 3rem;

    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }

  h4 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333333;
    line-height: 2.5rem;
  }

  h5 {
    font-size: 0.75rem;
    color: #333333;
  }

  p {
    font-size: 0.75rem;
    color: #999999;
  }

  ul {
    list-style: none;
    margin: 1rem 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
  }

  .title {
    margin-top: 2rem;
    text-transform: uppercase;
  }

  small {
    color: #ab2680;
    margin-top: 1rem;
  }

  .description {
    margin-top: 1rem;
    line-height: 1.2rem;
    max-height: 10rem;
    overflow: auto;
    padding-right: calc(3rem - 0.8rem - 0.25rem);
    margin-right: 0.25rem;

    &::-webkit-scrollbar {
      width: 0.25rem;
      background-color: transparent;
    }

    &::-webkit-scrollbar-track {
      border-radius: 0.8rem;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.8rem;
      background-color: #ab2680;
    }

    &::before {
      content: url(${quotes});
      padding-right: 0.2rem;
    }

    @media screen and (max-width: 768px) {
      padding: 0;
      overflow: hidden;
      max-height: auto;
    }
  }

  aside {
    @media screen and (max-width: 768px) {
      padding: 2rem 0;
    }
  }
`
