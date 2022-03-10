import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import backendAPI from '../backendAPI'

const LoginPage = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <LoginForm />
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Daftar</h2>
                    <p> Belum punya akun pengguna? silakan register terlebih dahulu </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Daftar sekarang!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      password: '',
      error: false,
      success: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      error: false,
    })
    let postData = {
      name: this.state.name,
      password: this.state.password,
    }
    console.log(postData)
    axios({
      method: backendAPI.login.method,
      url: backendAPI.login.url,
      data: postData,
    })
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          localStorage.setItem('user', JSON.stringify(res.data.data))
          localStorage.setItem('isLoggedIn', true)
          this.setState({
            success: true,
          })
        } else {
          this.setState({
            error: res.data.message,
          })
        }
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.message,
        })
        console.log('error')
        console.log(err.response)
      })
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <>
        {this.state.success && <Navigate to="/" replace={true} />}
        <h1>Login</h1>
        <p className="text-medium-emphasis">Login ke akun anda</p>
        {this.state.error && (
          <CAlert color="danger" dismissible>
            <strong>{this.state.error}</strong>
          </CAlert>
        )}
        <CForm onSubmit={this.handleSubmit}>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              <CIcon icon={cilUser} />
            </CInputGroupText>
            <CFormInput
              name="name"
              placeholder="Name"
              autoComplete="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText>
              <CIcon icon={cilLockLocked} />
            </CInputGroupText>
            <CFormInput
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </CInputGroup>
          <CRow>
            <CCol xs={6}>
              <CButton type="submit" color="primary" className="px-4">
                Login
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </>
    )
  }
}

export default LoginPage
