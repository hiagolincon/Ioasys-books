import { api } from 'src/service/api'
import { Book, Books } from './types'

export const getAllBooks = async ({
  page,
  amount = 25,
}: {
  page: number
  amount?: number
}): Promise<Books> => {
  const response = await api.get(`/books?page=${page}&amount=${amount}`)
  return response.data
}

export const getBook = async ({ id }: { id: string }): Promise<Book> => {
  const response = await api.get(`/books/${id}`)
  return response.data
}
