import React from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

// 用Provider包裹，并传入store
root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)
