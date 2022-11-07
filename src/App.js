import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom'
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Turismo from './Pages/Turismo';
import Historico from './Pages/Historico';
import Trabalhe from './Pages/ajuda'



function App() {
  return (
    <div>
      <Router>
        <header className="app-header">
          <NavBar />
        </header>
        <body className="app-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Turismo" element={<Turismo />} />
            <Route path="/Historico" element={<Historico />} />
            <Route path="/Trabalhe" element={<Trabalhe />} />
            
          </Routes>
        </body>
        <div className="app-footer">
          <footer className='Footer'>
            <center>
          <br></br>
          <p>Endereço: Av. Alfredo Lisboa, s/nº - Recife - PE, 50030-150</p>
          <p>(81) 98364-2686</p>
          <p>Desenvolvido por: Vitória Régia</p>                                          
          </center>
          </footer>
        </div>
      </Router>
    </div>
  );
} export default App
