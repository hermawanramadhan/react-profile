import React from 'react'
import PropTypes from 'prop-types'
import { CButton, CForm, CFormInput, CFormLabel } from '@coreui/react'
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
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
          localStorage.setItem('user', JSON.stringify(res.data.data))
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data)
        } else {
          console.log(err)
        }
      })
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <>
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
      </>
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
