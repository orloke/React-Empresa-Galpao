import { useEffect, useState } from 'react';
import { createProvider, deleteProvider, getProviders, updateProvider } from '../../api';
import { Providers } from '../@types';

const useProviders = () => {

    const [providersGet, setProvidersGet] = useState<Providers[]>([] as Providers[])

    useEffect(()=>{
        let providers = async ()=>{
            let providers = await getProviders()            
            setProvidersGet(providers.data)
        }
        providers()
    },[])

    const handleCreateProvider = async (user: Omit<Providers, 'id'>) => {
            const newUser = await createProvider(user)
            setProvidersGet(
                olderProviders => [...olderProviders, newUser]
            )
    }

    const handleUpdateProvider = async (id:number, user: Omit<Providers, 'id'>) => {
        const newUser = await updateProvider(id, user)
        setProvidersGet(
            olderProviders => olderProviders.map(
                element => element.id === id ? newUser : element
            )
        )
    }

    const handleDeleteProvider = async (id:number) =>{
        let confirm = window.confirm('Deseja deletar? Essa ação não pode ser desfeita!')
        if(confirm){
            await deleteProvider(id)
            setProvidersGet(
                olderList => olderList.filter(element=>element.id!== id)
            )
        }
    }

    return {
        providersGet,
        handleUpdateProvider,
        handleCreateProvider,
        handleDeleteProvider
    }
}

export default useProviders;