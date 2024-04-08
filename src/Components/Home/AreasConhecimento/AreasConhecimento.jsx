import React from 'react';
import { AreaConSingle } from '../../../Styled/styled';
import { Link } from 'react-router-dom';


const AreasConhecimento = (props) => {
    return (
        <AreaConSingle>
            <h3 className="titulo">{props.titulo}</h3>
            <p>{props.descricao}</p>
            <Link to={props.url}>Acessar cursos relacionados</Link>
        </AreaConSingle>
    )
}

export default AreasConhecimento;