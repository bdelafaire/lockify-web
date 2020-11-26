import * as api from './api.service'

export const addProfile = async (firstname: string, lastname: string, birthdate: Date) => {
    const res = await api.post('/profile', { firstname, lastname, birthdate })
}