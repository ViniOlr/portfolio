import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Front from './Components/Cursos/Front';
import Back from './Components/Cursos/Back';
import Banco from './Components/Cursos/Banco';
import RPA from './Components/Cursos/RPA';
import Dados from './Components/Cursos/Dados';
import { Main } from './Styled/styled';

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cursos-front' element={<Front />} />
          <Route path='/cursos-back' element={<Back />} />
          <Route path='/cursos-banco' element={<Banco />} />
          <Route path='/cursos-rpa' element={<RPA />} />
          <Route path='/cursos-dados' element={<Dados />} />
        </Routes>
      </Main>
      <Footer />
    </>

  );
}

export default App;