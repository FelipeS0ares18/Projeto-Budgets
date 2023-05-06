import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import React from 'react'
import Contato from './components/pages/Contato'
import Home from './components/pages/Home'
import NovoProjeto from './components/pages/NovoProjeto'
import Sobre from './components/pages/Sobre'
import Projects from './components/pages/projects'
import Projeto from './components/pages/Projeto'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'




function App() {
  return (
  
    <BrowserRouter>
  <NavBar />
  
    
    <Container customClass="min-height">
    <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/NovoProjeto" element={<NovoProjeto />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/Projeto/:id" element={<Projeto/>} />
            </Routes>
    </Container>
  

   <Footer />
   
  </BrowserRouter>

   
  );
}

export default App;
