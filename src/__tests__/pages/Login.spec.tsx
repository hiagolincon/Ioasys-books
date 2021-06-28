import { fireEvent, render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Login } from '../../pages/Login'

describe('ListPokemons', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn().mockReturnValue(null),
      unobserve: jest.fn().mockReturnValue(null),
      disconnect: jest.fn().mockReturnValue(null),
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('should be able to list pokemons', () => {
    const queryClient = new QueryClient()
    const defaultRender = (component: any) => {
      return render(
        <QueryClientProvider client={queryClient}>
          {component}
        </QueryClientProvider>,
      )
    }

    const { debug, getByPlaceholderText } = defaultRender(<Login />)
    const inputEmail = getByPlaceholderText('Insira seu e-mail')
    const inputPassword = getByPlaceholderText('Insira sua senha')

    fireEvent.change(inputEmail, { target: { value: 'johndoe@gmail.com' } })
    fireEvent.change(inputPassword, { target: { value: '12345' } })

    debug()
  })
})
