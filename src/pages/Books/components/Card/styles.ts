import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  max-width: 17rem;
  min-height: 10rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 6px 24px 0px rgba(84, 16, 95, 0.13);
  border: 0;
  border-radius: 0.25rem;
  background: #fff;
  padding: 1rem;
  gap: 1rem;

  aside {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.25rem;
    text-align: left;

    p {
      font-size: 0.75rem;
      color: #999999;
    }

    .author {
      color: #ab2680;
    }
  }

  img {
    width: 100%;
    max-width: 5rem;
    box-shadow: 0px 6px 9px 0px #00000026;
  }
`
