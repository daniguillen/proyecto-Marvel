import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import {Footer} from "./componentes/Footer"
import {Header} from "./componentes/Header"
import {Caracteres} from "./view/Caracteres"
import {Home} from "./view/Home"
import {Contacto} from "./view/Contacto"
import {Personaje} from "./view/Personaje"
import {About} from "./view/About"

// Estilos
import "./css/footer.css"
import "./css/header.css"
import "./css/home.css"
import "./css/App.css"
import "./css/caracteres.css"


function App() {
  // Cambio de idioma
  const [idioma, setIdioma] = useState('es');

  const cambiarIdioma = () => {
    setIdioma(idioma === 'es' ? 'en' : 'es');
    console.log("estoy en la APP", idioma)
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/caracteres' element={
          <React.Fragment> 
            <Header idioma={idioma} cambiarIdioma={cambiarIdioma} />
            <Caracteres />
            <Footer /> 
          </React.Fragment>
        } />
        <Route path='/personaje' element={
          <React.Fragment> 
          <Header idioma={idioma} cambiarIdioma={cambiarIdioma} /> 
            <Personaje/>
          <Footer /> 
          </React.Fragment>
        } />
        <Route path='/about' element={
          <React.Fragment> 
            <Header idioma={idioma} cambiarIdioma={cambiarIdioma} />
            <About idioma={idioma} />
            <Footer />
          </React.Fragment>
        } />
        <Route path='/contacto' element={
          <React.Fragment> 
            <Header  idioma={idioma} cambiarIdioma={cambiarIdioma}/>
            <Contacto/>
            <Footer />
          </React.Fragment>
        } />
      </Routes>
    </div>
  );
}

export default App;