import { FC } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Page from '@/page'

export const App: FC = () => {
  const queryClient = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />

        <Page />
      </QueryClientProvider>
    </div>
  )
}

export default App
