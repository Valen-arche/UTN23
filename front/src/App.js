import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import Nav from './Componentes/Nav';
import './App.css';
import Footer from './Componentes/Footer';
import Home from './Rutas/Home';
import Predicciones from './Rutas/Predicciones';
import Servicios from './Rutas/Servicios';
import Contacto from './Rutas/Contacto'

function App() {
  return (
    <div className='App'>
        <Header>
         </Header> 
        
        <BrowserRouter>
        

 <Nav/>
          <Routes>
 
       
            <Route path="/" element={<Home />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/Predicciones" element={<Predicciones />} />
       
        </Routes></BrowserRouter>
        <Footer />
      </div>
  );
}


export default App;
