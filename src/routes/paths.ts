import { lazy } from 'react'

export const Login = lazy(() =>
  import('src/pages/Login').then(module => ({
    default: module.Login,
  })),
)

export const Books = lazy(() =>
  import('src/pages/Books').then(module => ({
    default: module.Books,
  })),
)
