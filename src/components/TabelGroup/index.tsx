import React from 'react';
import { Form } from 'react-bootstrap';

interface TabelGroupProps{
    titulo: string,
    type: string,
    placeholder: string,
    id: string,
    value: string|number
    onChange: (e: any)=>void,
}

const TabelGroup: React.FC<TabelGroupProps> = (props) => {
    return (
        <Form.Group className='mb-5'>
            <Form.Label>{props.titulo}</Form.Label>
            <Form.Control type={props.type} placeholder = {props.placeholder} id = {props.id} value = {props.value} onChange = {props.onChange}/>
        </Form.Group>
    );
}

export default TabelGroup;