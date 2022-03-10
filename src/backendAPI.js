const backendAPI = {
  baseURL: 'http://localhost:8011',

  //endpoint
  login: {
    method: 'post',
    url: '/login',
  },
  userlist: {
    method: 'get',
    url: '/users',
  },
  userdetail: {
    method: 'get',
    url: '/user/{id}',
  },
  createuser: {
    method: 'post',
    url: '/user',
  },
}

export default backendAPI
