import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Front from './Components/Cursos/Front';
import { Main } from './Styled/styled';

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cursos-front' element={<Front />} />
        </Routes>
      </Main>
      <Footer />
    </>

  );
}

export default App;