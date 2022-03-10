import React from 'react'
const Logout = () => {
  localStorage.clear()
  window.location.replace('/')
  return <></>
}

export default Logout
