import React from 'react'
import notFoundCoverBook from './assets/notFoundCoverBook.png'
import { Container } from './styles'
import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
  title,
  authors,
  imageUrl,
  onClick,
  pageCount,
  published,
  publisher,
}) => {
  return (
    <Container type="button" onClick={onClick}>
      <img src={imageUrl || notFoundCoverBook} alt={title} />
      <aside>
        <div>
          <h6 className="fontIoasys-medium">{title}</h6>
          <p className="fontIoasys-regular author">{authors.join(', ')}</p>
        </div>
        <div>
          <p className="fontIoasys-regular">{`${pageCount} páginas`}</p>
          <p className="fontIoasys-regular">{publisher}</p>
          <p className="fontIoasys-regular">{`Publicado em ${published}`}</p>
        </div>
      </aside>
    </Container>
  )
}
