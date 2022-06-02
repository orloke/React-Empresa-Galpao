import { useState } from 'react';
import { Transport } from '../@types';

const ModalProducts = () => {
    const [createModalProducts, setCreateModalProducts] = useState<boolean>(false)
    const [editModalProducts, setEditModalProducts] = useState<Transport>({} as Transport)
    
    const handleOpenModalProducts = ()=>{
        setCreateModalProducts(true)
    }
    const handleCloseModalProducts = ()=>{
        setCreateModalProducts(false)
    }

    const handleOpenEditModalProducts = (user: Transport)=>{
        setEditModalProducts(user)
    }
    const handleCloseEditModalProducts = ()=>{
        setEditModalProducts({} as Transport)
    }

    return {
        createModalProducts,
        editModalProducts,
        handleOpenModalProducts,
        handleCloseModalProducts,
        handleOpenEditModalProducts,
        handleCloseEditModalProducts
    }
}

export default ModalProducts;