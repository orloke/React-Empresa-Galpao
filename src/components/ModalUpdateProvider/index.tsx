import { Button, Form, Modal } from 'react-bootstrap';
import { Providers } from '../@types'
import TabelGroup from '../TabelGroup';
import { useFormik } from 'formik'

// import { Container } from './styles';

interface ModalUpdateProviderProps{
    show: Providers,
    alterarProvider: (id:number, user: Omit<Providers, 'id'>) => void,
    onHide: ()=> void,

}

const ModalUpdateProvider: React.FC<ModalUpdateProviderProps> = ({show, onHide, alterarProvider}) => {

    const formik = useFormik({    
        enableReinitialize: true,    
        initialValues: {
            rz: show.rz,
            cnpj: show.cnpj,
            endereco: show.endereco,
            email: show.email,
            telefone: show.telefone
        },
        onSubmit: values =>{
            alterarProvider(
                show.id,
                {
                    rz: values.rz,
                    cnpj: values.cnpj,
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
                <Modal.Title>Alterar Fornecedor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <TabelGroup titulo = 'Razão social' type = 'text' placeholder = 'Seu nome' id = 'rz' value = {formik.values.rz} onChange = {formik.handleChange} />
                    <TabelGroup titulo = 'Cnpj' type = 'number' placeholder = 'Seu Cpf' id = 'cnpj' value = {formik.values.cnpj} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Endereço' type = 'text' placeholder = 'Seu endereço' id = 'endereco' value = {formik.values.endereco} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Email' type = 'email' placeholder = 'Seu melhor email' id = 'email' value = {formik.values.email} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Telefone' type = 'tel' placeholder = 'Seu melhor telefone' id = 'telefone' value = {formik.values.telefone} onChange = {formik.handleChange}/>
                    <Form.Group>
                        <Button variant='success' type='submit' style={{marginRight: 15}} >Salvar</Button>
                        <Button variant='danger' onClick={formik.handleReset} >Limpar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalUpdateProvider;