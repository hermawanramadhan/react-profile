import React from 'react'

// User
const CreateUser = React.lazy(() => import('./views/user/CreateUser'))
const ListUser = React.lazy(() => import('./views/user/ListUser'))
const DetailUser = React.lazy(() => import('./views/user/DetailUser'))
const Profile = React.lazy(() => import('./views/account/Profile'))
const Logout = React.lazy(() => import('./views/account/Logout'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/user', name: 'User Management', exact: true },
  { path: '/user/list', name: 'List User', element: ListUser },
  { path: '/user/new', name: 'Create User', element: CreateUser },
  { path: '/user/detail/:id', name: 'Detail User', element: DetailUser },
  { path: '/account', name: 'Account' },
  { path: '/account/profile', name: 'Profile', element: Profile },
  { path: '/account/logout', name: 'Logout', element: Logout },
]

export default routes
