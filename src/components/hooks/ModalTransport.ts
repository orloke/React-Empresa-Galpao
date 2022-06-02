import { useState } from 'react';
import { Transport } from '../@types';

const ModalTransport = () => {
    const [createModalTransport, setCreateModalTransport] = useState<boolean>(false)
    const [editModalTransport, setEditModalTransport] = useState<Transport>({} as Transport)
    
    const handleOpenModalTransport = ()=>{
        setCreateModalTransport(true)
    }
    const handleCloseModalTransport = ()=>{
        setCreateModalTransport(false)
    }

    const handleOpenEditModalTransport = (user: Transport)=>{
        setEditModalTransport(user)
    }
    const handleCloseEditModalTransport = ()=>{
        setEditModalTransport({} as Transport)
    }

    return {
        createModalTransport,
        editModalTransport,
        handleOpenModalTransport,
        handleCloseModalTransport,
        handleOpenEditModalTransport,
        handleCloseEditModalTransport
    }
}

export default ModalTransport;