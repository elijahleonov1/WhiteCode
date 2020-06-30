const minCountSymbol = (str = '', count = 3) => str.length >= count

const validateEmail = (email = '', minSymbol = 3) => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return (
        minCountSymbol(email, minSymbol) && re.test(String(email).toLowerCase())
    )
}

const loadFromLocalStorege = (nameStore) => {
    try {
        const data = window.localStorage.getItem(nameStore)
        return JSON.parse(data)
    } catch (e) {
        return {}
    }
}

const saveToLocalStorege = (nameStore, data) => {
    try {
        window.localStorage.setItem(nameStore, JSON.stringify(data))
    } catch (e) {
        throw Error(e)
    }
}

export default {
    validation: {
        email: validateEmail,
    },
    saveToLocalStorege,
    loadFromLocalStorege,
}
