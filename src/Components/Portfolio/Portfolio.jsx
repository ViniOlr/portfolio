import React from 'react';
import { Container, ContentPortfolio } from '../../Styled/styled';
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import PortfolioSingle from './PortSingle/PortSingle';

const Portfolio = ()=> {
  return (
    <ContentPortfolio>
        <Container>
            <Link to='/'><span><AiFillHome /> Voltar</span></Link>
            <PortfolioSingle></PortfolioSingle>
            <PortfolioSingle></PortfolioSingle>
            <PortfolioSingle></PortfolioSingle>
        </Container>
    </ContentPortfolio>    
  );
}

export default Portfolio;