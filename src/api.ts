import axios from "axios";
import { Provider } from "react";
import { User, Providers } from "./components/@types";

const api = axios.create({baseURL:"http://localhost:3333"})

// export const getUsers = ():Promise<User[]> =>{
//     return  api.get<User[]>('/users').then(renponse=>renponse.data)
// }
export const getUsers = async ():Promise<any> =>{
    return await api.get('/users')
}

export const createUsers = (user: Omit<User, 'id'>): Promise<User> =>{
    return api.post<User>('/users', user).then(response => response.data)
}

export const deleteUser = async (id:number): Promise<void> =>{
    await api.delete(`/users/${id}`)
}

export const updateUser = async (id:number,user: Omit<User, 'id'>): Promise<User> => {
    return api.put(`/users/${id}`,user).then(response=>response.data)
}

export const getProviders = async ():Promise<any> =>{
    return await api.get('/providers')
}

export const createProvider = (user: Omit<Providers, 'id'>): Promise<Providers> =>{
    return api.post<Providers>('/providers', user).then(response=>response.data)
}

export const updateProvider = async (id:number,user: Omit<Providers, 'id'>): Promise<Providers> => {
    return api.put(`/providers/${id}`,user).then(response=>response.data)
}

export const deleteProvider = async (id: number): Promise<void> => {
    await api.delete(`/providers/${id}`)
}