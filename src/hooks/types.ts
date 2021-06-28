export interface User {
  name: string
  gender: 'M' | 'F'
}

export interface AuthState {
  token: string
  user: User
}

export interface SignInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  token: string
  user: User
  signIn(credentials: SignInCredentials): Promise<AuthState>
  signOut(): void
}
