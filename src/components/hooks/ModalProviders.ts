import { useState } from 'react';
import { Providers } from '../@types';

const ModalProvider = () => {
    const [createModalProvider, setCreateModalProvider] = useState<boolean>(false)
    const [editModalProvider, setEditModaleditModalProvider] = useState<Providers>({} as Providers)
    
    const handleOpenModalProvider = ()=>{
        setCreateModalProvider(true)
    }
    const handleCloseModalProvider = ()=>{
        setCreateModalProvider(false)
    }

    const handleOpenEditModalProviders = (user: Providers)=>{
        setEditModaleditModalProvider(user)
    }
    const handleCloseEditModalProviders = ()=>{
        setEditModaleditModalProvider({} as Providers)
    }

    return {
        createModalProvider,
        editModalProvider,
        handleOpenModalProvider,
        handleCloseModalProvider,
        handleOpenEditModalProviders,
        handleCloseEditModalProviders
    }
}

export default ModalProvider;