import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Providers } from '../@types'
import TabelGroup from '../TabelGroup';
import { useFormik } from 'formik'



// import { Container } from './styles';

interface ModalComponentProviderProps{
    show: boolean,
    createProvider: (user: Omit<Providers, 'id'>) => void,
    onHide: ()=> void,
}

const ModalComponentProvider: React.FC<ModalComponentProviderProps> = ({show, onHide, createProvider}) => {
    const formik = useFormik({
        initialValues: {
            rz: '',
            cnpj: 0,
            endereco: '',
            email: '',
            telefone: 0
        },
        onSubmit: values =>{
            createProvider(
                {
                rz: values.rz,
                cnpj: values.cnpj,
                endereco: values.endereco,
                email: values.email,
                telefone: values.telefone
            })
            onHide()
        }
    })
    
    return (
        <Modal show={show} onHide = {onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastrar Usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <TabelGroup titulo = 'Razão Social' type = 'text' placeholder = 'Seu nome' id = 'rz' value = {formik.values.rz} onChange = {formik.handleChange} />
                    <TabelGroup titulo = 'Cnpj' type = 'number' placeholder = 'Seu Cpf' id = 'cnpj' value = {formik.values.cnpj} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Endereço' type = 'text' placeholder = 'Seu endereço' id = 'endereco' value = {formik.values.endereco} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Email' type = 'email' placeholder = 'Seu melhor email' id = 'email' value = {formik.values.email} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Telefone' type = 'tel' placeholder = 'Seu melhor email' id = 'telefone' value = {formik.values.telefone} onChange = {formik.handleChange}/>
                    <Form.Group>
                        <Button variant='success' type='submit' style={{marginRight: 15}} >Salvar</Button>
                        <Button variant='danger' onClick={formik.handleReset} >Limpar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalComponentProvider;