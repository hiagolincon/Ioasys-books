import styled from 'styled-components'

export const StyledModal = styled.div`
  background: #ffff;
  max-width: 48rem;
  width: 100%;
  max-height: 38rem;
  height: 100%;
  border-radius: 0.25rem;
  z-index: 16;
  overflow: hidden;
  display: flex;

  @media screen and (max-width: 768px) {
    overflow: auto;
    max-height: 86%;
    max-width: 90%;
  }
`

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 15;
`

export const CloseButton = styled.button`
  position: absolute;
  z-index: 17;
  top: 1rem;
  right: 1rem;

  width: 2rem;
  height: 2rem;
  border: 0.063rem solid rgba(51, 51, 51, 0.2);
  background: #ffff;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`
