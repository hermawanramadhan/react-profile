import React from 'react'
import PropTypes from 'prop-types'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import backendAPI from '../../backendAPI'

class FormInputGroup extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onChange(this.props.name, event.target.value)
  }

  render() {
    return (
      <div className="mb-3">
        <CFormLabel htmlFor={'input-' + this.props.name}>{this.props.label}</CFormLabel>
        <CFormInput
          type={this.props.type}
          id={'input-' + this.props.name}
          aria-describedby={this.props.name + 'Help'}
          value={this.props.value}
          onChange={this.handleChange}
          {...(this.props.autoComplete ? { autoComplete: this.props.autoComplete } : {})}
        />
      </div>
    )
  }
}

class CreateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: 0,
      password: '',
      success: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      error: false,
      success: false,
    })
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

  handleChange(name, value) {
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <CCard>
        <CCardHeader>Create User</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs={12}>
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
                <FormInputGroup
                  type="text"
                  name="name"
                  label="Name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  autoComplete="off"
                />
                <FormInputGroup
                  type="number"
                  name="age"
                  label="Age"
                  onChange={this.handleChange}
                  value={this.state.age}
                />
                <FormInputGroup
                  type="password"
                  name="password"
                  label="Password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  autoComplete="new-password"
                />
                <CButton type="submit" color="primary">
                  Submit
                </CButton>
              </CForm>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    )
  }
}

FormInputGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.any,
  autoComplete: PropTypes.string,
}

FormInputGroup.defaultProps = {
  type: 'text',
}

export default CreateUser
