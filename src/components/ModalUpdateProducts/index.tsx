import { Button, Form, Modal } from 'react-bootstrap';
import { Providers, User } from '../@types'
import TabelGroup from '../TabelGroup';
import { useFormik } from 'formik'

// import { Container } from './styles';

// interface ModalUpdateProps{
//     show: User,
//     alterarUser: (id:number, user: Omit<User, 'id'>) => void,
//     onHide: ()=> void,
// }

const ModalUpdateProducts: React.FC<any> = ({show, onHide, alterarUser}) => {

    const formik = useFormik({    
        enableReinitialize: true,    
        initialValues: {
            nome: show.nome,
            descricao: show.descricao,
            preco: show.preco,
            quantidade: show.quantidade,
        },
        onSubmit: values =>{
            alterarUser(
                show.id,
                {
                    nome: values.nome,
                    descricao: values.descricao,
                    preco: values.preco,
                    quantidade: values.quantidade,
                }
            )
            onHide()
        }
    })    
    
    return (
        <Modal show={Object.keys(show).length > 0} onHide = {onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Alterar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <TabelGroup titulo = 'Nome' type = 'text' placeholder = 'Seu nome' id = 'nome' value = {formik.values.nome} onChange = {formik.handleChange} />
                    <TabelGroup titulo = 'Descricao' type = 'text' placeholder = 'Seu descricao' id = 'descricao' value = {formik.values.descricao} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Preço' type = 'number' placeholder = 'Seu endereço' id = 'preco' value = {formik.values.preco} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Quantidade' type = 'number' placeholder = 'Seu melhor quantidade' id = 'quantidade' value = {formik.values.quantidade} onChange = {formik.handleChange}/>
                    <Form.Group>
                        <Button variant='success' type='submit' style={{marginRight: 15}} >Salvar</Button>
                        <Button variant='danger' onClick={formik.handleReset} >Limpar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalUpdateProducts;