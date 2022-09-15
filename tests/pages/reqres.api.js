import BaseAPI from '$root/pages/base.api';

const ReqresAPI = {
    register: (data) => BaseAPI.post('/register', data),
    login: (data) => BaseAPI.post('/login', data),
    users: (data) => BaseAPI.get('/users/2', data),
    putUsers: (data) => BaseAPI.put('/users/2', data),
    patchUsers: (data) => BaseAPI.patch('/users/2', data),
    deleteUsers: (data) => BaseAPI.delete('/users/2', data),    

    usersSingle: (data) => BaseAPI.get('/unknown/2', data)
}

export default ReqresAPI;