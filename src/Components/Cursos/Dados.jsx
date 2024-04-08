import React from 'react';
import { Container, ContentCursos } from '../../Styled/styled';
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import CursoSingle from './CursoSingle'
import Alura from '../../img/alura.jpeg'

const Dados = () => {
    return (
        <ContentCursos>
            <Container>
                <Link to='/'><span><AiFillHome /> Voltar</span></Link>
                <div className='cursos-group'>
                    <CursoSingle
                        img={Alura}
                        titulo='Python e APIs: conhecendo a biblioteca Requests'
                        data='03/2024'
                        inst='Alura'
                    />
                    <CursoSingle
                        img={Alura}
                        titulo='Pipeline de dados: combinando Python e orientação a objeto'
                        data='03/2024'
                        inst='Alura'
                    />
                </div>
            </Container>
        </ContentCursos>
    );
}

export default Dados;