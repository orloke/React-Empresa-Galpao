export interface User {
    id: number,
    nome: string,
    cpf: number|string,
    endereco: string,
    email: string,
}

export interface Providers {
    id: number,
    rz: string, //razão social
    cnpj: number,
    endereco: string,
    email: string,
    telefone: number
}