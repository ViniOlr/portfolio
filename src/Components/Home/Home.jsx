import React from "react";
import Formacoes from '../Formacoes/Formacoes'
import { Main, DadosPessoais, InfosAdicionais } from "../../Styled/styled";
import FotoPerfil from '../../img/vinicius.jpg'
import { IoIosSchool } from 'react-icons/io'
import { MdWork } from 'react-icons/md'
import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs'
import Experiencias from "../Experiencias/Experiencias";
import HabSingle from "../HabSingle/HabSingle";

const Home = ()=> {
    return(
        <Main>
            <div className="container">
                <DadosPessoais>
                    <div className="box perfil">
                        <div className="img">
                            <img src={FotoPerfil} alt="Imagem de perfil" />
                        </div>
                        <h1 className="nome">Vinicius de Oliveira</h1>
                        <h2 className="cargo">Analista e Desenvolvedor <br /> de Sistemas</h2>
                        <div className="links">
                            <a href="https://github.com/ViniOlr" target='_blank' rel="noreferrer"><BsGithub /></a>
                            <a href="https://api.whatsapp.com/send?phone=5511966309946&text=Ol%C3%A1%20Vinicius%2C%20Vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA." target='_blank' rel="noreferrer"><BsWhatsapp /></a>
                            <a href="https://www.linkedin.com/in/viniolr/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
                            <a href="https://instagram.com/vini.olr?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer"><BsInstagram /></a>
                        </div>
                    </div>
                    <div className="box formacao">
                        <h2 className="titulo"><IoIosSchool /> Formação</h2>
                        <div className="formacoesGroup">
                            <Formacoes
                                titulo='Analise e Desenvolvimento de Sistemas'
                                instituto='FIAP - Faculdade de Informática e Administração Paulista.'
                                periodo='jan-2022 a dez-2023 (2º Semestre).'
                            />
                            <Formacoes 
                                titulo='Ensino Médio Técnico em Informática'
                                instituto='UNASP - Centro Universitário Adventista de São Paulo'
                                periodo='jan-2020 a dez-2021 (Concluído).'                            
                            />
                        </div>
                    </div>
                    <div className="box experiencias">
                        <h2 className="titulo"><MdWork /> Experiências</h2>
                        <div className="experienciasGroup">
                            <Experiencias 
                                titulo='Estágiario de TI'
                                empresa='TSCTI - Soluções Fiscais'
                                periodo='jun de 2022 - o momento · 4 meses'
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
                    </div>
                </DadosPessoais>
                <InfosAdicionais>
                    <div className="box">
                        <h2 className="tituloLarge">Informações do GitHub</h2>
                        <div className="imgsGitHub">
                            <img height="180em" width="100%" alt="Informações do GitHub - Vinicius de Oliveira's GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=ViniOlr&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
                            <img height="180em" width="100%" alt="Informações do GitHub - Most Used Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ViniOlr&layout=compact&langs_count=7&theme=dracula"/>
                            <span>* Atualizado em tempo real</span>
                        </div>
                    </div>
                    <div className="box">
                        <h2 className="tituloLarge">Habilidades</h2>
                        <div className="habilidades">
                            <HabSingle 
                                titulo='HTML'
                                porcent='100%'
                            />
                            <HabSingle 
                                titulo='CSS'
                                porcent='90%'
                            />
                            <HabSingle 
                                titulo='JavaScript'
                                porcent='70%'
                            />
                            <HabSingle 
                                titulo='ReactJs'
                                porcent='75%'
                            />
                            <HabSingle 
                                titulo='Java'
                                porcent='50%'
                            />
                            <HabSingle 
                                titulo='Python'
                                porcent='50%'
                            />
                        </div>
                    </div>
                </InfosAdicionais>
            </div>
        </Main>
    )
}

export default Home;