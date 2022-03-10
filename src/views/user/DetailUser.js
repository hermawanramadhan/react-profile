import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'
import backendAPI from '../../backendAPI'
import { useParams } from 'react-router-dom'

const DetailUser = () => {
  const [user, setUser] = React.useState(false)
  const { id } = useParams()
  axios({
    method: backendAPI.userdetail.method,
    url: backendAPI.userdetail.url.replace('{id}', id),
  })
    .then((res) => {
      console.log(res.data)
      setUser(res.data.data)
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data)
      } else {
        console.log(err)
      }
    })
  return (
    <>
      {user && (
        <CCard style={{ width: '100%' }}>
          <CCardHeader>Detail User</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12}>
                <CTable striped>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="col" colSpan="3" color="primary">
                        User info
                      </CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ width: '100px' }}>
                        ID
                      </CTableHeaderCell>
                      <CTableDataCell scope="col" style={{ width: '1px' }}>
                        :
                      </CTableDataCell>
                      <CTableDataCell scope="col">{user.id}</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                      <CTableHeaderCell scope="col">:</CTableHeaderCell>
                      <CTableDataCell scope="col">{user.name}</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Age</CTableHeaderCell>
                      <CTableHeaderCell scope="col">:</CTableHeaderCell>
                      <CTableDataCell scope="col">{user.age}</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="col" colSpan="3">
                        &nbsp;
                      </CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="col" colSpan="3" color="primary">
                        Risk Profile
                      </CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Bond </CTableHeaderCell>
                      <CTableHeaderCell scope="col">:</CTableHeaderCell>
                      <CTableDataCell scope="col">{user.risk_profile.bond_percent} </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="col">MM</CTableHeaderCell>
                      <CTableHeaderCell scope="col">:</CTableHeaderCell>
                      <CTableDataCell scope="col">{user.risk_profile.mm_percent}</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Stock</CTableHeaderCell>
                      <CTableHeaderCell scope="col">:</CTableHeaderCell>
                      <CTableDataCell scope="col">{user.risk_profile.stock_percent}</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      )}
    </>
  )
}

export default DetailUser
