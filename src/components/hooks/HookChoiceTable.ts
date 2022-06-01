import { useState } from 'react';

// import { Container } from './styles';

const HookChoiceTable = () => {

    const [takeTable, setTakeTable] = useState('usuarios')

    const handleChoiceTable = (value:string) =>{
        setTakeTable(value)
    }
    
    return {
        takeTable,
        handleChoiceTable
    }

}

export default HookChoiceTable;