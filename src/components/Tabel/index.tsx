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

const TabelUser: React.FC<any> = ({users, deleteUser, openEditModal, openModal, titulo, cp, desativar, quinto, quarto}) => {

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
                        <th>{quarto}</th>
                        <th>{quinto}</th>
                        <th style={{display: desativar}}>telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{desativar == 'none' ? user.descricao : user.registro}</td>
                            <td>{desativar == 'none' ? 'R$ ' + Number(user.preco).toFixed(2) : user.endereco}</td>
                            <td>{desativar == 'none' ? user.quantidade : user.email}</td>
                            <td style={{display: desativar}}>{user.telefone}</td>
                            <td className='td-button'>
                                <Button className='button' type='button' variant = 'danger' style={{marginRight: 5}} onClick = {()=>deleteUser(user.id)} >
                                    <BsTrash className='icon' />
                                </Button>
                                <Button className='button' type='button' variant = 'warning' style={{marginLeft: 5}} onClick = {()=>{openEditModal(user)}}>
                                    <BsPen className='icon' />
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