const backendAPI = {
  baseURL: 'http://165.22.55.132:8009',

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
