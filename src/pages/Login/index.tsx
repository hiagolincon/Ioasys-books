import { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Logo } from 'src/assets/images/logo.svg'
import { Input } from 'src/components/Input'
import { useAuth } from 'src/hooks/auth'
import { Container } from './styles'

export const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  })

  const { signIn } = useAuth()
  const history = useHistory()

  const { mutate, isLoading, isError, reset } = useMutation(
    () => signIn({ ...inputValues }),
    {
      onSuccess: () => {
        history.push('/livros')
      },
    },
  )

  return (
    <Container hasError={isError}>
      <section>
        <header>
          <Logo />
          <p className="fontIoasys-light">Books</p>
        </header>
        <section>
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="Insira seu e-mail"
            onFocus={reset}
            onChange={event => {
              setInputValues({ ...inputValues, email: event.target.value })
            }}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            onFocus={reset}
            placeholder="Insira sua senha"
            onChange={event => {
              setInputValues({ ...inputValues, password: event.target.value })
            }}
            action={{
              text: 'Entrar',
              click: mutate,
              loading: isLoading,
              disable:
                isLoading ||
                inputValues.email === '' ||
                inputValues.password === '',
            }}
          />
        </section>
      </section>
    </Container>
  )
}
