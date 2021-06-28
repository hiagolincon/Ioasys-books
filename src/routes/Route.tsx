import React from 'react'
import {
  RouteProps as ReactRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom'

import { useAuth } from 'src/hooks/auth'

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean
  component?: React.ComponentType
}

export const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { token } = useAuth()

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!token && Component ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/livros',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}
