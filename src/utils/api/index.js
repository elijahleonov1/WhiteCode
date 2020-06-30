import axios from 'axios'

const LOGIN = 'test@gmail.com'
const PASSWORD = '123456789'

const login = ({ login, password }) => {
    //эмуляция работы с сервером авторизации
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isAuth = login === LOGIN && password === PASSWORD
            resolve({
                authentication: isAuth,
                errorMessage: isAuth ? null : 'wrong login or password',
            })
        }, 2000)
    })
}

const api = {
    login,
}

export default api
