import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { User } from '../@types'
import TabelGroup from '../TabelGroup';
import { useFormik } from 'formik'


// interface ModalUserProps{
//     show: boolean,
//     createUser: (User: Omit<User, "id">) => void,
//     onHide: ()=> void,
// }

const ModalUser: React.FC<any> = ({show, onHide, createUser, titulo, cp}) => {
    const formik = useFormik({
        initialValues: {
            nome: '',
            registro: 0,
            endereco: '',
            email: '',
            telefone: 0
        },
        onSubmit: values =>{
            createUser({
                nome: values.nome,
                registro: values.registro,
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
                <Modal.Title>Cadastrar {titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <TabelGroup titulo = 'Nome' type = 'text' placeholder = 'Seu nome' id = 'nome' value = {formik.values.nome} onChange = {formik.handleChange} />
                    <TabelGroup titulo = {cp} type = 'number' placeholder = {`Seu ${cp}`} id = 'registro' value = {formik.values.registro} onChange = {formik.handleChange}/>
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

export default ModalUser;