import { Button, Form, Modal } from 'react-bootstrap';
import { User } from '../@types'
import TabelGroup from '../TabelGroup';
import { useFormik } from 'formik'

// import { Container } from './styles';

interface ModalUpdateProps{
    show: User,
    alterarUser: (id:number, user: Omit<User, 'id'>) => void,
    onHide: ()=> void,
}

const ModalUpdate: React.FC<ModalUpdateProps> = ({show, onHide, alterarUser}) => {
    
    const formik = useFormik({    
        enableReinitialize: true,    
        initialValues: {
            nome: show.nome,
            cpf: show.cpf,
            endereco: show.endereco,
            email: show.email,
            telefone: 0
        },
        onSubmit: values =>{
            alterarUser(
                show.id,
                {
                    nome: values.nome,
                    cpf: values.cpf,
                    endereco: values.endereco,
                    email: values.email,
                    telefone: values.telefone
                }
            )
            onHide()
        }
    })    
    
    return (
        <Modal show={Object.keys(show).length > 0} onHide = {onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Alterar Usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <TabelGroup titulo = 'Nome' type = 'text' placeholder = 'Seu nome' id = 'nome' value = {formik.values.nome} onChange = {formik.handleChange} />
                    <TabelGroup titulo = 'Cpf' type = 'number' placeholder = 'Seu Cpf' id = 'cpf' value = {formik.values.cpf} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Endereço' type = 'text' placeholder = 'Seu endereço' id = 'endereco' value = {formik.values.endereco} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Email' type = 'email' placeholder = 'Seu melhor email' id = 'email' value = {formik.values.email} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Telefone' type = 'tel' placeholder = 'Seu telefone' id = 'telefone' value = {formik.values.telefone} onChange = {formik.handleChange}/>
                    <Form.Group>
                        <Button variant='success' type='submit' style={{marginRight: 15}} >Salvar</Button>
                        <Button variant='danger' onClick={formik.handleReset} >Limpar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalUpdate;