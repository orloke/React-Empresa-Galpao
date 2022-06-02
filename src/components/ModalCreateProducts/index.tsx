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

const ModalCreateProducts: React.FC<any> = ({show, onHide, createUser}) => {
    const formik = useFormik({
        initialValues: {
            nome: '',
            descricao: '',
            preco: 0,
            quantidade: 0,
        },
        onSubmit: values =>{
            createUser({
                nome: values.nome,
                descricao: values.descricao,
                preco: values.preco,
                quantidade: values.quantidade,
            })
            onHide()
        }
    })
    
    return (
        <Modal show={show} onHide = {onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastrar Produtos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <TabelGroup titulo = 'Nome' type = 'text' placeholder = 'Seu nome' id = 'nome' value = {formik.values.nome} onChange = {formik.handleChange} />
                    <TabelGroup titulo = 'Descricao' type = 'text' placeholder = 'Escreva uma breve descricao do produto' id = 'descricao' value = {formik.values.descricao} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Preço' type = 'number' placeholder = 'Preço' id = 'preco' value = {formik.values.preco} onChange = {formik.handleChange}/>
                    <TabelGroup titulo = 'Quantidade' type = 'number' placeholder = 'Escreva a quantidade' id = 'quantidade' value = {formik.values.quantidade} onChange = {formik.handleChange}/>
                    <Form.Group>
                        <Button variant='success' type='submit' style={{marginRight: 15}} >Salvar</Button>
                        <Button variant='danger' onClick={formik.handleReset} >Limpar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ModalCreateProducts;