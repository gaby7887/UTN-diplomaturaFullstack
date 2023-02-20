import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../src/styles/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
//PAGES
import TiendaPage from './pages/TiendaPage';
import DetallePage from './pages/DetallePage';
import EstrenosPage from './pages/EstrenosPage';
import ReseniaPage from './pages/ReseniaPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<TiendaPage />} />
          <Route path='/detalle' element={<DetallePage />} />
          <Route path='/estrenos' element={<EstrenosPage />} />
          <Route path='/resenia' element={<ReseniaPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
        </Routes>
        <Footer />
      </Router>    
    </div>
  );
}

export default App;
