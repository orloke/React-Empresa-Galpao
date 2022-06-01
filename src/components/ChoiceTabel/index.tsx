import { Button, Container } from "react-bootstrap";
import './style.css'

interface ChoiceTabelProps{
    takeTable: string,
    handleChoiceTable: (e: any) => void
}

const ChoiceTabel: React.FC<ChoiceTabelProps> = ({takeTable, handleChoiceTable}) => {
    return (
        <Container fluid ='sm' className="container_choice">
            <h5>Escolha a table: </h5>
            {/* <select value={takeTable} onChange = {(e)=>{handleChoiceTable(e.target.value)}}>
                <option value="usuarios">Usuarios</option>
                <option value="fornecedores">Fornecedores</option>
            </select> */}
            <Button variant="success" onClick={()=>handleChoiceTable('usuarios')}>Usuários</Button>
            <Button variant="success" onClick={()=>handleChoiceTable('fornecedores')}>Fornecedores</Button>
        </Container>

    )
}

export default ChoiceTabel;