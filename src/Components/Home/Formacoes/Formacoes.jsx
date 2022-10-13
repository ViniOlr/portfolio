import React from "react";
import { FormExpSingle } from "../../../Styled/styled";

const Formacoes = (props)=>{
    return (
        <FormExpSingle>
            <h3 className="titulo">{props.titulo}</h3>
            <p><b>Instituto:</b> {props.instituto}</p>
            <p><b>Período:</b> {props.periodo}</p>
        </FormExpSingle>
    )
}

export default Formacoes;