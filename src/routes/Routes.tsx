import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Switch, Redirect } from 'react-router-dom'
import { Hooks } from 'src/hooks'
import { Loading } from 'src/components/Loading'

import { Route } from './Route'

import { Books, Login } from './paths'

export const Routes = () => {
  const queryClient = new QueryClient()
  return (
    <Suspense fallback={<Loading />}>
      <Hooks>
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/livros" component={Books} isPrivate />
            <Route path="/" component={Login} />
            <Redirect to="/" />
          </Switch>
        </QueryClientProvider>
      </Hooks>
    </Suspense>
  )
}
