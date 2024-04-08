import React from 'react';
import { Container, ContentCursos } from '../../Styled/styled';
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import CursoSingle from './CursoSingle'
import Udemy from '../../img/udemy.jpeg'

const Rpa = () => {
    return (
        <ContentCursos>
            <Container>
                <Link to='/'><span><AiFillHome /> Voltar</span></Link>
                <div className='cursos-group'>
                    <CursoSingle
                        img={Udemy}
                        titulo='Python RPA com BotCity: Crie robôs com alta produtividade'
                        data='01/2024'
                        inst='Udemy'
                    />
                </div>
            </Container>
        </ContentCursos>
    );
}

export default Rpa;