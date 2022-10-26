import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 4% 0 3%;
`;

export const Box = styled.div`
    background-color: #101010;
    -webkit-box-shadow: 5px 5px 5px 2px #000000;
    box-shadow: 5px 5px 5px 2px #000000;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
`;

export const H2Titulo = styled.h2`
    position: relative;
    padding-left: 13px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 1.2em;
    ::before {
        content: '';

        width: 3px;
        height: 100%;
        background-color: var(--rosa);
        position: absolute;
        left: 0;
    }
    svg {
        font-size: 1.3em;
        margin-right: 7px;
    }
`;

export const H2TituloLarge = styled.h2`
    margin-bottom: 40px;
    font-size: 1.6em;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    ::before {
        content: '';

        width: 50%;
        height: 3px;
        background-color: var(--rosa);
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.3s;
    }
    :hover::before {
        width: 75%;
    }
    svg {
        font-size: 1.3em;
        margin-right: 7px;
    }
`;

export const Main = styled.main`
    padding: 30px 0;
`;

export const ContentHome = styled.section `
    > div {
        display:flex;
        justify-content: space-between;
        flex-direction: row;
        @media screen and (max-width: 930px) {
            flex-direction: column;
            gap: 25px 0;
        }
    }
`;

export const DadosPessoais = styled.section`
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 25px 0;
    float: left;
    .perfil {
        width: 100;
        .img {
            width: 250px;
            height: 250px;            
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            img {
                width: 100%;
                height: 100%;
                border-radius: calc(250px / 2);
                object-position: 0  30%;
                object-fit: cover;
            }
        }
        h1.nome {
        text-align: center;
        padding: 10px 0 5px 0;
        font-size: 1.8em;
        }
        h2.cargo {
            font-size: 0.9em;
            text-align: center;
            color: #ccc;
            font-style: italic;
        }
        .links {
            margin: 17px 0;
            display: flex;
            justify-content: space-around;
            a {
                color: #ccc;
                font-size: 1.3em;
            }
        }
    }
    @media screen and (max-width: 930px) {
        width: 100%;
    }
`;

export const FormExpSingle = styled.div`
    position: relative;
    margin-bottom: 10px;
    ::before {
        content: '';
        width: 3px;
        height: calc(100% + 10px);
        position: absolute;
        left: 18px;
        top: 20px;
        background-color: white;
    }
    :last-of-type::before {
        display: none;
    }
    
    h3.titulo {
        padding-left: 50px;
        position: relative;
        ::before{
            content: '';
            width: 20px;
            height: 20px;
            border-radius: calc(20px / 2);
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            background-color: white;
        }
    }
    p {
        padding-left: 50px;
        color: #808080;
        b {
            color: #ccc;
        }
    }
`;

export const InfosAdicionais = styled.section`
    width: calc(65% - 25px);
    display: flex;
    flex-direction: column;
    gap: 25px 0;
    .imgsGitHub {
        width: 100;
        img {
            width: 100;
        }
        span {
            color: red;
            font-size: 0.6em;
        }
    }
    .habilidades {
        display: flex;
        flex-wrap: wrap;
        gap: 20px 15px;
        justify-content: space-between;
        .habSingle {
            width: 47%;
            .flex {
                display: flex;
                justify-content: space-between;
                p {
                    margin-bottom: 10px;
                }
                p.porcent {
                    color: var(--rosa);
                    font-size: 0.8em;
                }
            }
            .progress {
                width: 100%;
                height: 13px;
                border-radius: 10px;
                background-color: #ccc;
                position: relative;
                span {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    /* width: 50%; */
                    background-color: var(--rosa);
                    border-radius: 10px;
                } 
            }
        }
    }
    .textResumo {
        p::first-letter {
            padding-left: 40px;
        }
        a {
            color: var(--rosa);
        }
        button {
            position: relative;
            left: 50%;
            transform: translateX(-50%);

            background-color: var(--rosa);
            color: black;
            margin: 20px 0;
            padding: 7px 20px;
            font-size: 1.1em;
            text-transform: uppercase;
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.3s;
            :hover{
                padding: 10px 25px;
                font-size: 1.2em;
            }
        }
    }
    @media screen and (max-width: 930px) {
        width: 100%;
    }
`;

export const ContentPortfolio = styled.section`
    > div {
        display: flex;
        flex-direction: column;
        gap: 40px 0;
    }
    a {
        text-decoration: none;
        span {
            display: flex;
            align-items: center;
            svg {
                font-size: 1.2em;
                margin-right: 7px;
            }
        }        
    }
`;

export const PortfolioSingle = styled.div`
    img {
        width: 100%;
    }
    p {
        color: #ccc;
    }
`;

export const ContentFooter = styled.footer`
    text-align: center;
    padding: 20px 0;
`;