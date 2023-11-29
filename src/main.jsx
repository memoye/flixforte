import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouterProvider from './providers/routes'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { store } from './store'
import { Provider as ReduxStoreProvider } from 'react-redux'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <ReduxStoreProvider store={ store }>
        <AppRouterProvider />
      </ReduxStoreProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)
