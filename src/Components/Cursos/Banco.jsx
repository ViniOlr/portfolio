import React from 'react';
import { Container, ContentCursos } from '../../Styled/styled';
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import CursoSingle from './CursoSingle'
import Alura from '../../img/alura.jpeg'
import Fiap from '../../img/fiap.jpeg'

const Banco = () => {
    return (
        <ContentCursos>
            <Container>
                <Link to='/'><span><AiFillHome /> Voltar</span></Link>
                <div className='cursos-group'>
                    <CursoSingle
                        img={Alura}
                        titulo='Modelagem de banco de dados relacional: entendendo SQL'
                        data='04/2024'
                        inst='Alura'
                    />
                    <CursoSingle
                        img={Fiap}
                        titulo='Programação em Banco de Dados'
                        data='07/2022'
                        inst='FIAP'
                    />
                </div>
            </Container>
        </ContentCursos>
    );
}

export default Banco;