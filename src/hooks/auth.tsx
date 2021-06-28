import axios from 'axios'
import React, { createContext, useCallback, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { api, baseURL } from 'src/service/api'
import { AuthContextData, AuthState } from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('jwt')
    const user = localStorage.getItem('user')
    if (token && user) {
      return { token, user: JSON.parse(user) }
    }
    return {} as AuthState
  })

  const history = useHistory()

  const signIn = useCallback(async ({ email, password }) => {
    const {
      data: responseData,
      headers: { authorization: token },
    } = await axios.post(`${baseURL}/auth/sign-in`, {
      email,
      password,
    })

    localStorage.setItem('jwt', token)
    localStorage.setItem('user', JSON.stringify(responseData))

    setData({ user: responseData, token })
    api.defaults.headers.authorization = `Bearer ${token}`

    return responseData
  }, [])

  const signOut = useCallback(() => {
    localStorage.clear()
    setData({} as AuthState)
    history.push('/')
  }, [history])

  return (
    <AuthContext.Provider
      value={{ token: data.token, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider')
  }

  return context
}
