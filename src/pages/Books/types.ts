export interface Book {
  imageUrl: string
  title: string
  authors: string[]
  pageCount: number
  publisher: string
  published: number
  id: string
  language: string
  isbn13: string
  isbn10: string
  description: string
}

export interface Books {
  data: Book[]
  page: number
  totalItems: number
  totalPages: number
}
