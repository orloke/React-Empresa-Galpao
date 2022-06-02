import { Button, Container, Table } from 'react-bootstrap';
import { User } from '../@types';
import { BsTrash, BsPen } from "react-icons/bs"
import './style.css'
import '../style/style.css'

// interface TabelUserProps{
//     users: User[],
//     openModal: ()=> void,
//     deleteUser: (id:number)=>void,
//     openEditModal: (user:User)=> void
// }

const TabelUser: React.FC<any> = ({users, deleteUser, openEditModal, openModal, titulo, cp}) => {

    return (
        
        <Container fluid ='sm' className='container-table'>
            <div className='cabecalho-global'>
                <h1>Lista de {titulo}</h1>
                <Button variant='outline-success' onClick={openModal}>
                        Adicionar {titulo}
                </Button>
            </div>
            
            <Table striped borderless responsive hover variant='light' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>{cp}</th>
                        <th>Endereço</th>
                        <th>Email</th>
                        <th>telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{user.registro}</td>
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

export default TabelUser;