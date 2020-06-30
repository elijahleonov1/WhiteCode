import axios from 'axios'

const LOGIN = 'test@gmail.com'
const PASSWORD = '123456789'

const login = async ({ login, password }) => {
    //эмуляция работы с сервером авторизации
    setTimeout(() => {
        if (login === LOGIN && password === PASSWORD) {
            return {
                authentication: true,
                errorMessage: null,
            }
        }
        return {
            authentication: false,
            errorMessage: 'wrong login or password',
        }
    }, 2000)
}

export default {
    login,
}
