import React from 'react';
import { Box, PortfolioSingle } from '../../../Styled/styled';
import ImgCBahia from '../../../img/casasBahia.JPG'

const PortSingle = ()=> {
  return (
    <PortfolioSingle>
        <Box>
            <a href="https://www.casasbahia.com.br/" target='_blank' rel="noreferrer" >
                <img src={ImgCBahia} alt="Imagem de portfolio do meu portfolio" />
            </a>
            <h3>Casas Bahia</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo pretium mi, a facilisis ligula rutrum sit amet. Mauris scelerisque sit amet enim in rhoncus. Suspendisse tempus lacus vitae turpis vehicula feugiat. Praesent viverra id metus ut pulvinar. Proin elit diam, condimentum sit amet suscipit ut, porttitor at nibh. Etiam lacinia est at metus dignissim, at ullamcorper magna elementum. Duis nec ultricies dolor, venenatis rhoncus nibh. Phasellus sit amet porta urna, sit amet scelerisque leo.</p>
        </Box>
    </PortfolioSingle>
  );
}

export default PortSingle;