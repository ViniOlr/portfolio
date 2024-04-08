import React from 'react';
import { Container, ContentCursos } from '../../Styled/styled';
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import CursoSingle from './CursoSingle'
import Danki from '../../img/danki.jpeg'
import Coder from '../../img/coder.jpeg'
import Fiap from '../../img/fiap.jpeg'

const Front = () => {
    return (
        <ContentCursos>
            <Container>
                <Link to='/'><span><AiFillHome /> Voltar</span></Link>
                <div className='cursos-group'>
                    <CursoSingle 
                        img={Fiap}
                        titulo='Responsive Web Development'
                        data='10/2022'
                        inst='FIAP'
                    />
                    <CursoSingle 
                        img={Coder}
                        titulo='Curso Web Moderno Completo com JavaScript 2022'
                        data='08/2021'
                        inst='Cod3r'
                    />
                    <CursoSingle 
                        img={Danki}
                        titulo='Curso Webmaster Front-End'
                        data='05/2021'
                        inst='Danki Code'
                    />
                </div>
            </Container>
        </ContentCursos>
    );
}

export default Front;