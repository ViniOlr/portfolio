import React from 'react';
import { Container, ContentCursos } from '../../Styled/styled';
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import CursoSingle from './CursoSingle'
import Alura from '../../img/alura.jpeg'
import Fiap from '../../img/fiap.jpeg'

const Back = () => {
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
                        titulo='Python: aplicando a Orientação a Objetos'
                        data='02/2024'
                        inst='Alura'
                    />
                    <CursoSingle
                        img={Alura}
                        titulo='Python: avance na Orientação a Objetos e consuma API'
                        data='02/2024'
                        inst='Alura'
                    />
                    <CursoSingle
                        img={Alura}
                        titulo='Python: crie a sua primeira aplicação'
                        data='01/2024'
                        inst='Alura'
                    />
                    <CursoSingle
                        img={Alura}
                        titulo='Flask: avançando no desenvolvimento web com Python'
                        data='12/2023'
                        inst='Alura'
                    />
                    <CursoSingle
                        img={Fiap}
                        titulo='Python Development'
                        data='09/2023'
                        inst='FIAP'
                    />
                    <CursoSingle
                        img={Fiap}
                        titulo='Java Fundamentos'
                        data='02/2023'
                        inst='FIAP'
                    />
                    <CursoSingle
                        img={Fiap}
                        titulo='Algoritmos: Aprenda a programar'
                        data='07/2022'
                        inst='FIAP'
                    />
                </div>
            </Container>
        </ContentCursos>
    );
}

export default Back;