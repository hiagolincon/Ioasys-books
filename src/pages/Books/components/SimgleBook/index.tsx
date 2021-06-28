import React from 'react'
import { Book } from '../../types'

import { Container } from './styles'

export const SimgleBook: React.FC<Book> = ({
  title,
  authors,
  imageUrl,
  pageCount,
  published,
  publisher,
  isbn10,
  isbn13,
  language,
  description,
}) => {
  return (
    <Container>
      <img src={imageUrl} alt={title} />
      <aside>
        <div>
          <h4 className="fontIoasys-medium">{title}</h4>
          <small className="fontIoasys-regular">{authors.join(', ')}</small>

          <h5 className="fontIoasys-medium title">Informações</h5>
          <ul>
            <li>
              <h5 className="fontIoasys-medium">Páginas</h5>
              <p className="fontIoasys-regular">{`${pageCount} páginas`}</p>
            </li>
            <li>
              <h5 className="fontIoasys-medium">Editora</h5>
              <p className="fontIoasys-regular">{publisher}</p>
            </li>
            <li>
              <h5 className="fontIoasys-medium">Publicação</h5>
              <p className="fontIoasys-regular">{published}</p>
            </li>
            <li>
              <h5 className="fontIoasys-medium">Idioma</h5>
              <p className="fontIoasys-regular">{language}</p>
            </li>
            <li>
              <h5 className="fontIoasys-medium">ISBN-10</h5>
              <p className="fontIoasys-regular">{isbn10}</p>
            </li>
            <li>
              <h5 className="fontIoasys-medium">ISBN-13</h5>
              <p className="fontIoasys-regular">{isbn13}</p>
            </li>
          </ul>
          <h5 className="fontIoasys-medium title">resenha da editora</h5>
        </div>

        <p className="description fontIoasys-regular">{description}</p>
      </aside>
    </Container>
  )
}
