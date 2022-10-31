import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RouterConfig } from './navigation/RouterConfig'
import './App.css'

import Header from './components/header'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <RouterConfig />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
