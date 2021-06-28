import { Book } from '../../types'

export interface CardProps extends Book {
  onClick(): void
}
