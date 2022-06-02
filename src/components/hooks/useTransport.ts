import { useEffect, useState } from 'react';
import { createTransport, deleteTransport, getTrasnport, updateTransport } from '../../api';
import { Transport } from '../@types';

const useTransports = () => {

    
    const [transportGet, setTransportgGet] = useState<Transport[]>([] as Transport[])

    useEffect(()=>{
        let users = async ()=>{
            let usuarios = await getTrasnport()            
            setTransportgGet(usuarios.data)
        }
        users()
    },[])

    const handleCreateTransport = async (user: Omit<Transport, 'id'>) => {
        const newUser = await createTransport(user)
        setTransportgGet(
            olderUsers => [...olderUsers, newUser]
        )
    }

    const handleDeleteTransport = async (id:number) => {
        let confirm = window.confirm('Deseja deletar? Essa ação não pode ser desfeita!')
        if(confirm){
            await deleteTransport(id)
            setTransportgGet(
                olderList => olderList.filter(element=>element.id!== id)
            )
        }

    }

    const handleUpdateTransport = async (id:number, user: Omit<Transport, 'id'>) => {
        const newUser = await updateTransport(id, user)
        setTransportgGet(
            olderList => olderList.map(
                element => element.id === id ? newUser : element
        )
        )
    }

    return {
        transportGet,
        handleCreateTransport,
        handleUpdateTransport,
        handleDeleteTransport
    }
}

export default useTransports;