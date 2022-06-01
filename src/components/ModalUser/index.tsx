import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { User } from '../@types'
import TabelGroup from '../TabelGroup';
import { useFormik } from 'formik'



// import { Container } from './styles';

interface ModalUserProps{
    show: boolean,
    createUser: (User: Omit<User, "id">) => void,
    onHide: ()=> void,
}

const ModalUser: React.FC<ModalUserProps> = ({show, onHide, createUser}) => {
    const formik = useFormik({
        initialValues: {
            nome: '',
            cpf: 0,
            endereco: '',
            email: ''
        },
        onSubmit: values =>{
            createUser({
                nome: values.nome,
                cpf: values.cpf,
                endereco: values.endereco,
                email: values.email
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
                    <TabelGroup titulo = 'Nome' type = 'text' placeholder = 'Seu nome' id = 'nome' value = {formik.values.nome} onChange = {formik.handleChange} />
                    <TabelGroup titulo = 'Cpf' type = 'number' placeholder = 'Seu Cpf' id = 'cpf' value = {formik.values.cpf} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Endereço' type = 'text' placeholder = 'Seu endereço' id = 'endereco' value = {formik.values.endereco} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Email' type = 'email' placeholder = 'Seu melhor email' id = 'email' value = {formik.values.email} onChange = {formik.handleChange}/>
                    <Form.Group>
                        <Button variant='success' type='submit' style={{marginRight: 15}} >Salvar</Button>
                        <Button variant='danger' onClick={formik.handleReset} >Limpar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalUser;