import React from 'react'
import { Outlet } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  )
}

export default App
