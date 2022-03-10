import React from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
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

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      password: '',
      success: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let postData = {
      name: this.state.name,
      age: parseInt(this.state.age),
      password: this.state.password,
    }
    console.log(postData)
    axios({
      method: backendAPI.createuser.method,
      url: backendAPI.createuser.url,
      data: postData,
    })
      .then((res) => {
        console.log(res.data)
        if (res.data) {
          this.setState({
            success: res.data.message,
            name: '',
            age: '',
            password: '',
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
  render() {
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <h1>Daftar</h1>
                  <p className="text-medium-emphasis">Daftar pengguna baru</p>
                  {this.state.error && (
                    <CAlert color="danger" dismissible>
                      <strong>{this.state.error}</strong>
                    </CAlert>
                  )}
                  {this.state.success && (
                    <CAlert color="success" dismissible>
                      <strong>{this.state.success}</strong>
                    </CAlert>
                  )}
                  <CForm onSubmit={this.handleSubmit}>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="age"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton type="submit" color="success">
                        Daftar
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

export default Register
