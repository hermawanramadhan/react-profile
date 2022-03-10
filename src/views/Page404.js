import React from 'react'
import { CCol, CContainer, CRow } from '@coreui/react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-2 me-4">404</h1>
              <h4 className="pt-3">Page not found.</h4>
              <p className="text-medium-emphasis float-start">
                The page you are looking for was not found.
              </p>
            </div>
          </CCol>
        </CRow>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <Link to="/">Back to Home</Link>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
