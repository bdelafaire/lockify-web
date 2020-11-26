import * as api from './api.service'

export const login = async (email: string, password: string) => {
    const res = await api.post('account/login', { email, password })
  }

export const addAccount = async (email: string, password: string) => {
    const res = await api.post('account', { email, password })
}