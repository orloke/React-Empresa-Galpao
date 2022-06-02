import { useEffect, useState } from 'react';
import {  createProducts, deleteProducts, getProducts, updateProducts } from '../../api';
import { Products } from '../@types';

const useProducts = () => {

    
    const [productsGet, setProductsGet] = useState<Products[]>([] as Products[])

    useEffect(()=>{
        let users = async ()=>{
            let usuarios = await getProducts()            
            setProductsGet(usuarios.data)
        }
        users()
    },[])

    const handleCreateProducts = async (user: Omit<Products, 'id'>) => {
        const newUser = await createProducts(user)
        setProductsGet(
            olderUsers => [...olderUsers, newUser]
        )
    }

    const handleDeleteProducts = async (id:number) => {
        let confirm = window.confirm('Deseja deletar? Essa ação não pode ser desfeita!')
        if(confirm){
            await deleteProducts(id)
            setProductsGet(
                olderList => olderList.filter(element=>element.id!== id)
            )
        }

    }

    const handleUpdateProducts = async (id:number, user: Omit<Products, 'id'>) => {
        const newUser = await updateProducts(id, user)
        setProductsGet(
            olderList => olderList.map(
                element => element.id === id ? newUser : element
        )
        )
    }

    return {
        productsGet,
        handleCreateProducts,
        handleUpdateProducts,
        handleDeleteProducts
    }
}

export default useProducts;