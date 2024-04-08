import React from "react";
import Formacoes from './Formacoes/Formacoes'
import { DadosPessoais, InfosAdicionais, Container, Box, H2Titulo, H2TituloLarge, ContentHome } from "../../Styled/styled";
import FotoPerfil from '../../img/vinicius.jpg'
import { IoIosSchool } from 'react-icons/io'
import { MdWork } from 'react-icons/md'
import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { MdOutlineMailOutline } from "react-icons/md";
import Experiencias from "./Experiencias/Experiencias";
import AreasConhecimento from "./AreasConhecimento/AreasConhecimento";

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
                            <a href="https://www.instagram.com/vinioliveira.dev/" target='_blank' rel="noreferrer"><BsInstagram /></a>
                        </div>
                        <p><a href="mailto:vinioliveiracontato03@gmail.com"><MdOutlineMailOutline /> </a>vinioliveiracontato03@gmail.com</p>
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
                    <Box className="formacao">
                        <H2Titulo><IoIosSchool /> Formação</H2Titulo>
                        <div className="formacoesGroup">
                            <Formacoes
                                titulo='Análise e Desenvolvimento de Sistemas'
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
                </DadosPessoais>
                <InfosAdicionais>
                    <Box>
                        <H2TituloLarge>Resumo</H2TituloLarge>
                        <div className="textResumo">
                            <p>Profissional proativo, dedicado, autodidata e com facilidade em trabalhar em equipe. Formado em Análise e Desenvolvimento de Sistemas pela FIAP e mais de quatro anos de experiência no mundo da programação.</p>
                            <p>Atualmente, atuo como analista de sistemas no mercado de TI, na área de soluções fiscais, onde desempenho um papel fundamental na implementação de soluções de automação de processos (RPA) utilizando Python. Além disso, tenho expertise na criação e manutenção de funcionalidades para APIs utilizando Flask, bem como experiência com banco de dados Oracle, PL/SQL e Apex.</p>
                            <p>Minha jornada profissional tem sido marcada pelo constante interesse em explorar novas tecnologias e aprimorar minhas habilidades. Estou particularmente entusiasmado com a área de dados e estou ansioso para expandir meu conhecimento nesse campo.</p>
                            <p>Em busca de desafios ainda mais estimulantes, estou planejando iniciar uma faculdade de Engenharia de Software no segundo semestre de 2024, consolidando ainda mais minha base de conhecimento e habilidades técnicas.</p>
                        </div>
                    </Box>
                    <Box>
                        <H2TituloLarge>Áreas de Conhecimento</H2TituloLarge>
                        <div className="areas_group">
                            <AreasConhecimento
                                titulo='Front-End'
                                descricao='Sou especializado em desenvolvimento Front-end, com proficiência em HTML, CSS e JavaScript, garantindo interfaces web intuitivas e responsivas. Além disso, tenho conhecimento em React, capacitando-me a criar componentes reutilizáveis. Também estou familiarizado com as bibliotecas Bootstrap e Materialize, otimizando o desenvolvimento e mantendo a consistência visual nos projetos.'
                                url='/cursos-front'
                            />
                            <AreasConhecimento
                                titulo='Back-End'
                                descricao='Possuo experiência sólida em desenvolvimento back-end, utilizando Python e o framework Flask para construir APIs robustas. Minha habilidade em Python me permite criar soluções eficientes e escaláveis, enquanto o uso do Flask simplifica o processo de desenvolvimento, permitindo-me criar APIs RESTful de forma rápida e eficaz. Estou familiarizado com conceitos como roteamento de URLs, manipulação de solicitações e respostas HTTP, autenticação e autorização de usuários, e integração de banco de dados, garantindo que minhas APIs atendam às necessidades dos clientes de forma eficiente e segura.'
                                url='/cursos-back'
                            />
                            <AreasConhecimento
                                titulo='Banco de Dados'
                                descricao='No ambiente de bancos de dados relacionais, demonstro habilidades avançadas em SQL, com experiência específica no SGBD Oracle. Meu conhecimento em Oracle abrange a criação e manipulação de estruturas de banco de dados, incluindo a implementação de triggers, sequences, procedures e functions utilizando PL/SQL. Estou apto a projetar e otimizar esquemas de banco de dados para garantir desempenho e integridade dos dados. Além disso, possuo experiência em bancos de dados NoSQL, permitindo-me trabalhar com modelos de dados flexíveis e escaláveis para atender a diversas necessidades de armazenamento e recuperação de dados.'
                                url='/cursos-banco'
                            />
                            <AreasConhecimento
                                titulo='RPA (Automação de Processos Robóticos)'
                                descricao='Possuo conhecimento em Python para mapear, desenvolver e orquestrar automações para sistemas web e desktop. Além disso, tenho experiência na comunicação dos robôs com bancos de dados, facilitando a integração e manipulação de dados em processos automatizados.'
                                url='/cursos-rpa'
                            />
                            <AreasConhecimento
                                titulo='Engenharia de Dados'
                                descricao='Possuo experiência na construção de pipelines em Python, os quais são fundamentais para o processamento automatizado de dados. Estes pipelines permitem a extração, transformação e carga (ETL) de dados de diversas fontes, facilitando a análise e manipulação de informações. Utilizando bibliotecas como Pandas, NumPy e Scikit-learn, sou capaz de criar fluxos de trabalho eficientes e escaláveis para atender às demandas de processamento de dados em diversos domínios'
                                url='/cursos-dados'
                            />
                        </div>
                    </Box>
                </InfosAdicionais>
            </Container>
        </ContentHome>
    )
}

export default Home;