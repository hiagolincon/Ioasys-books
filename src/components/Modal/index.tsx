import React from 'react'
import ReactDOM from 'react-dom'
import { ReactComponent as CloseIcon } from './assets/close.svg'
import { StyledModal, StyledModalOverlay, CloseButton } from './styles'
import { ModalProps } from './types'

export const Modal = ({ show, children, close }: ModalProps) => {
  const modalContent = show ? (
    <StyledModalOverlay>
      <CloseButton onClick={close}>
        <CloseIcon />
      </CloseButton>
      <StyledModal>{children}</StyledModal>
    </StyledModalOverlay>
  ) : null

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const modalDiv: any = document.getElementById('modal-portal')

  return ReactDOM.createPortal(modalContent, modalDiv)
}
