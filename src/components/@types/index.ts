export interface User {
    id: number,
    nome: string,
    registro: number,
    endereco: string,
    email: string,
    telefone: number
}

export interface Providers {
    id: number,
    nome: string, //razão social
    registro: number,
    endereco: string,
    email: string,
    telefone: number
}

export interface Transport {
    id: number,
    nome: string, //razão social
    registro: number,
    endereco: string,
    email: string,
    telefone: number
}
export interface Products {
    id: number,
    nome: string, //razão social
    descricao: number,
    preco: number,
    quantidade: number,
}