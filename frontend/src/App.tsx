import React from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Navbars from './components/Navbars/Navbars'
import GlobalStyle from './styles/GlobalStyle'

const theme = {
  colors: {
    textPrimary: '#000', // 원하는 기본 색상
    textSecondary: '#6b7280', // 추가 색상
  },
}

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbars />
      </ThemeProvider>
      <Outlet />
    </>
  )
}

export default App
