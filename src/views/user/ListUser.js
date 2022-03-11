import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import axios from 'axios'
import backendAPI from '../../backendAPI'
import { Link } from 'react-router-dom'

class TableData extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
    axios({
      method: backendAPI.userlist.method,
      url: backendAPI.userlist.url + '?limit=100',
    })
      .then((res) => {
        console.log(res.data)
        this.setState({
          data: res.data.data,
        })
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data)
        } else {
          console.log(err)
        }
      })
  }

  render() {
    return (
      <CTableBody>
        {this.state.data.map((data) => (
          <CTableRow key={data.id}>
            <CTableHeaderCell scope="row">{data.id}</CTableHeaderCell>
            <CTableDataCell>{data.name}</CTableDataCell>
            <CTableDataCell>{data.age}</CTableDataCell>
            <CTableDataCell>
              <Link to={'/user/detail/' + data.id}>
                <CButton color="primary">Detail</CButton>
              </Link>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    )
  }
}
const ListUser = () => {
  return (
    <CCard style={{ width: '100%' }}>
      <CCardBody>
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Age</CTableHeaderCell>
              <CTableHeaderCell scope="col">&nbsp;</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <TableData />
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default ListUser
