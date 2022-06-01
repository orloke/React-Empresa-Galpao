import { Button, Container, Table } from 'react-bootstrap';
import { Providers } from '../@types';
import { BsTrash, BsPen } from "react-icons/bs"
import '../style/style.css';

interface TabelProvidersProps{
    users: Providers[],
    openModalProvider: ()=>void
    deleteUser: (id:number)=>void,
    openEditModal: (user:Providers)=> void
}

const TabelProviders: React.FC<TabelProvidersProps> = ({users, deleteUser, openEditModal, openModalProvider}) => {
    
    return (
        
        <Container  fluid ='sm' style={{marginTop: 25, display: 'block'}} >
            <div className='cabecalho-global'>
                <h1>Lista de Fornecedores</h1>
                <Button variant='outline-success' onClick={openModalProvider}>
                            Adicionar fornecedores
                </Button>
            </div>
            
            <Table striped borderless responsive hover variant='light' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Cnpj</th>
                        <th>Endereço</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.rz}</td>
                            <td>{user.cnpj}</td>
                            <td>{user.endereco}</td>
                            <td>{user.email}</td>
                            <td>{user.telefone}</td>
                            <td>
                                <Button type='button' variant = 'danger' style={{marginRight: 5}} onClick = {()=>deleteUser(user.id)} >
                                    <BsTrash size={18}/>
                                </Button>
                                <Button type='button' variant = 'warning' style={{marginLeft: 5}} onClick = {()=>{openEditModal(user)}}>
                                    <BsPen size={18}/>
                                </Button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </Table>
            
        </Container>
        
    )
}

export default TabelProviders;