import React from 'react'

import MyRouter from './router/index'
import Footer from './components/Footer'

import './style/base.css'

export default function App() {
  return (
    <div>
      <MyRouter>{<Footer />}</MyRouter>
    </div>
  )
}
