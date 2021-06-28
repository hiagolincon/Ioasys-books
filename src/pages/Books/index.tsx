import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { ReactComponent as Logo } from 'src/assets/images/logo.svg'
import { useAuth } from 'src/hooks/auth'
import { Modal } from 'src/components/Modal'
import { Loading } from 'src/components/Loading'
import { ReactComponent as SignOutIcon } from './assets/signOutIcon.svg'
import { ReactComponent as ArrowLeft } from './assets/arrowLeft.svg'
import { ReactComponent as ArrowRight } from './assets/arrowRight.svg'
import { Card } from './components/Card'
import { getAllBooks, getBook } from './constroller'

import { Container } from './styles'
import { SimgleBook } from './components/SimgleBook'
import { Book } from './types'

export const Books: React.FC = () => {
  const {
    user: { gender, name },
    signOut,
  } = useAuth()
  const [page, setPage] = useState(1)
  const {
    data: allBooks,
    isPreviousData,
    isLoading,
  } = useQuery(['books', page], () => getAllBooks({ page, amount: 12 }))
  const [showModal, setModal] = useState(false)

  const {
    data,
    isLoading: isLoadingBook,
    mutate,
  } = useMutation(['book'], ({ id }: { id: string }) => getBook({ id }))

  const welcome = gender === 'M' ? 'o' : 'a'
  const userFirsName = name.split(' ')[0]

  if (isLoading || isLoadingBook) {
    return <Loading />
  }

  const dataBook = data as Book

  return (
    <Container>
      <Modal show={showModal} close={() => setModal(false)}>
        <SimgleBook {...dataBook} />
      </Modal>
      <section>
        <header>
          <div className="logoContainer">
            <Logo />
            <p className="fontIoasys-light">Books</p>
          </div>
          <div className="signOutContainer">
            <p className="fontIoasys-regular welcome">
              Bem vind{welcome},{' '}
              <b className="fontIoasys-bold">{userFirsName}</b>
            </p>
            <button type="button" onClick={signOut}>
              <SignOutIcon />
            </button>
          </div>
        </header>

        <section>
          {allBooks?.data.map(book => (
            <Card
              {...book}
              onClick={() => {
                setModal(true)
                mutate({ id: book.id })
              }}
            />
          ))}
        </section>
        <footer>
          <p className="fontIoasys-regular">
            Página <b className="fontIoasys-bold">{allBooks?.page}</b> de{' '}
            <b>{Math.ceil(allBooks?.totalPages || 1)}</b>
          </p>
          <button
            className="btnBackPage"
            type="button"
            onClick={() => setPage(oldPage => oldPage - 1)}
            disabled={page === 1}
          >
            <ArrowLeft />
          </button>
          <button
            className="btnNextPage"
            type="button"
            onClick={() => !isPreviousData && setPage(oldPage => oldPage + 1)}
            disabled={page === Math.ceil(allBooks?.totalPages || 1)}
          >
            <ArrowRight />
          </button>
        </footer>
      </section>
    </Container>
  )
}
