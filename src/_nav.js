import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilPlus, cilLockLocked } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'User Management',
  },
  {
    component: CNavItem,
    name: 'Create User',
    to: '/user/new',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'List User',
    to: '/user/list',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Account',
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/account/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/account/logout',
    icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
  },
]

export default _nav
