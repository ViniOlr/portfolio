import React from 'react';
import { AreaConSingle } from '../../../Styled/styled';


const AreasConhecimento = (props) => {
    return (
        <AreaConSingle>
            <h3 className="titulo">{props.titulo}</h3>
            <p>{props.descricao}</p>
        </AreaConSingle>
    )
}

export default AreasConhecimento;