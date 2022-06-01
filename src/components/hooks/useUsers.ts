import { useEffect, useState } from 'react';
import { createUsers, deleteUser, getUsers, updateUser } from '../../api';
import { User } from '../@types';

const useUsers = () => {

    
    const [userGet, setUsergGet] = useState<User[]>([] as User[])

    useEffect(()=>{
        let users = async ()=>{
            let usuarios = await getUsers()            
            setUsergGet(usuarios.data)
        }
        users()
    },[])

    const handleCreateUser = async (user: Omit<User, 'id'>) => {
        const newUser = await createUsers(user)
        setUsergGet(
            olderUsers => [...olderUsers, newUser]
        )
    }

    const handleDeleteUser = async (id:number) => {
        let confirm = window.confirm('Deseja deletar? Essa ação não pode ser desfeita!')
        if(confirm){
            await deleteUser(id)
            setUsergGet(
                olderList => olderList.filter(element=>element.id!== id)
            )
        }

    }

    const handleUpdateUser = async (id:number, user: Omit<User, 'id'>) => {
        const newUser = await updateUser(id, user)
        setUsergGet(
            olderList => olderList.map(
                element => element.id === id ? newUser : element
        )
        )
    }

    return {
        userGet,
        handleCreateUser,
        handleDeleteUser,
        handleUpdateUser
    }
}

export default useUsers;