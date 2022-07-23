import axios from "axios";
import { User, Providers, Transport, Products } from "./components/@types";

const api = axios.create({baseURL:"http://localhost:3333"})

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

export const getTrasnport = async ():Promise<any> =>{
    return await api.get('/transports')
}

export const createTransport = (user: Omit<Transport, 'id'>): Promise<Transport> =>{
    return api.post<Transport>('/transports', user).then(response=>response.data)
}

export const updateTransport = async (id:number,user: Omit<Transport, 'id'>): Promise<Transport> => {
    return api.put(`/transports/${id}`,user).then(response=>response.data)
}

export const deleteTransport = async (id: number): Promise<void> => {
    await api.delete(`/transports/${id}`)
}

export const getProducts = async ():Promise<any> =>{
    return await api.get('/products')
}

export const createProducts = (user: Omit<Products, 'id'>): Promise<Products> =>{
    return api.post<Products>('/products', user).then(response=>response.data)
}

export const updateProducts= async (id:number,user: Omit<Products, 'id'>): Promise<Products> => {
    return api.put(`/products/${id}`,user).then(response=>response.data)
}

export const deleteProducts = async (id: number): Promise<void> => {
    await api.delete(`/products/${id}`)
}
