import { useState } from 'react';
import { User } from '../@types';

const ModalUser = () => {
    const [createModal, setCreateModal] = useState<boolean>(false)
    const [editModal, setEditModal] = useState<User>({} as User)
    
    const handleOpenModal = ()=>{
        setCreateModal(true)
    }
    const handleCloseModal = ()=>{
        setCreateModal(false)
    }

    const handleOpenEditModal = (user: User)=>{
        setEditModal(user)
    }
    const handleCloseEditModal = ()=>{
        setEditModal({} as User)
    }

    return {
        createModal,
        editModal,
        handleOpenModal,
        handleCloseModal,
        handleOpenEditModal,
        handleCloseEditModal
    }
}

export default ModalUser;