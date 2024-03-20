import React from "react";
import Formacoes from './Formacoes/Formacoes'
import { DadosPessoais, InfosAdicionais, Container, Box, H2Titulo, H2TituloLarge, ContentHome } from "../../Styled/styled";
import FotoPerfil from '../../img/vinicius.jpg'
import { IoIosSchool } from 'react-icons/io'
import { MdWork } from 'react-icons/md'
import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { MdOutlineMailOutline } from "react-icons/md";
import Experiencias from "./Experiencias/Experiencias";

const Home = ()=> {
    return(
        <ContentHome>
            <Container>
                <DadosPessoais>
                    <Box className='perfil'>
                        <div className="img">
                            <img src={FotoPerfil} alt="Imagem de perfil" />
                        </div>
                        <h1 className="nome">Vinicius de Oliveira</h1>
                        <h2 className="cargo">Analista de Sistemas</h2>
                        <div className="links">
                            <a href="https://github.com/ViniOlr" target='_blank' rel="noreferrer"><BsGithub /></a>
                            <a href="https://api.whatsapp.com/send?phone=5511966309946&text=Ol%C3%A1%20Vinicius%2C%20Vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA." target='_blank' rel="noreferrer"><BsWhatsapp /></a>
                            <a href="https://www.linkedin.com/in/viniolr/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
                            <a href="https://instagram.com/vini.olr?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer"><BsInstagram /></a>
                        </div>
                        <p><a href="mailto:vinioliveiracontato03@gmail.com"><MdOutlineMailOutline /> </a>vinioliveiracontato03@gmail.com</p>
                    </Box>
                    <Box className="formacao">
                        <H2Titulo><IoIosSchool /> Formação</H2Titulo>
                        <div className="formacoesGroup">
                            <Formacoes
                                titulo='Analise e Desenvolvimento de Sistemas'
                                instituto='FIAP - Faculdade de Informática e Administração Paulista.'
                                periodo='jan-2022 a dez-2023 (Concluído).'
                                className='faculdade'
                            />
                            <Formacoes 
                                titulo='Ensino Médio Técnico em Informática'
                                instituto='UNASP - Centro Universitário Adventista de São Paulo'
                                periodo='jan-2020 a dez-2021 (Concluído).'                            
                            />
                        </div>
                    </Box>
                    <Box className="experiencias">
                        <H2Titulo><MdWork /> Experiências</H2Titulo>
                        <div className="experienciasGroup">
                            <Experiencias 
                                titulo='Analista de Sistemas'
                                empresa='TSCTI - Soluções Fiscais'
                                periodo='jan de 2024 - o momento'
                                local='São Paulo, Brasil'
                                atividades='Processos de RPA com Python, atividades com PL/SQL e Oracle Apex'
                            />
                            <Experiencias 
                                titulo='Estagiário de TI'
                                empresa='TSCTI - Soluções Fiscais'
                                periodo='jun de 2022 - dez de 2023 · 1 ano e 7 meses'
                                local='São Paulo, Brasil'
                                atividades='Processos de RPA com Python, atividades com PL/SQL e Oracle Apex'
                            />
                            <Experiencias 
                                titulo='Jovem Aprendiz'
                                empresa='Ageplan Engenharia Construções Ltda'
                                periodo='jan de 2022 - jun de 2022 · 6 meses'
                                local='São Paulo, Brasil'
                                atividades='Atividades administrativas.'
                            />
                        </div>
                    </Box>
                </DadosPessoais>
                <InfosAdicionais>
                    <Box>
                        <H2TituloLarge>Resumo</H2TituloLarge>
                        <div className="textResumo">
                            
                        </div>
                    </Box>
                </InfosAdicionais>
            </Container>
        </ContentHome>
    )
}

export default Home;