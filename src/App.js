import React, { Component, Suspense } from 'react'
import { BrowserRouter, matchRoutes, Route, Routes, useLocation } from 'react-router-dom'
import './scss/style.scss'
import routes from './routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/Login'))
const Register = React.lazy(() => import('./views/Register'))
const Page404 = React.lazy(() => import('./views/Page404'))
const Page500 = React.lazy(() => import('./views/Page500'))

const DefaultLayoutComponent = () => {
  const location = useLocation()
  const route = matchRoutes(routes, location)
  return route ? <DefaultLayout /> : <Page404 />
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayoutComponent />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
