import styled from 'styled-components';

export const Main = styled.main`
    padding: 30px 0;
    .container {
        display:flex;
        justify-content: space-between;
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
        img {
            width: 250px;
            height: 250px;
            border-radius: calc(250px / 2);
            object-position: 0  30%;
            object-fit: cover;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
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
    .imgs {
        width: 100;
        img {
            width: 100;
        }
    }
`;