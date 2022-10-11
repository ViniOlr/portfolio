import React from 'react';
import { FormExpSingle } from '../../Styled/styled';


const Experiencias = (props)=> {
  return(
    <FormExpSingle>
        <h3 className="titulo">{props.titulo}</h3>
        <p><b>Empresa:</b> {props.empresa}</p>
        <p><b>Periodo:</b> {props.periodo}</p>
        <p><b>Local:</b> {props.local}</p>
        <p><b>Atividades:</b> {props.atividades}</p>
    </FormExpSingle>
  )
}

export default Experiencias;