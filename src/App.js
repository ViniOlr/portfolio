import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import { Main } from './Styled/styled';

function App() {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Main>
  );
}

export default App;