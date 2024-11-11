import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import Login from './pages/LoginPage/Login'
import NotFound from './pages/NotFoundPage/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
])

export default router
