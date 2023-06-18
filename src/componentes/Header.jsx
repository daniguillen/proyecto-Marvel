import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "../css/header.css";
import { DatosJSON } from "./DatosJSON";
import { Lenguaje } from './Lenguaje';

export function Header({ idioma, cambiarIdioma }) {
  const DatosJson = DatosJSON();



  return (
    <>
      <nav className="navbar navbar-dark bg-dark navBig">

        <ol className="headerNav ">
          <li>
            <Link to={`/caracteres`} className="botonEntrar">
              {DatosJson[idioma].personaje}
            </Link>
          </li>
          <li>
            <Link to={`/about`} className="botonEntrar">
              {DatosJson[idioma].about}
            </Link>
          </li>
          <li>
            <Link to={`/contacto`} className="botonEntrar">
              {DatosJson[idioma].contacto}
            </Link>
          </li>
          <Lenguaje cambiarIdioma={cambiarIdioma} />
        </ol>
      </nav>
      



      <nav className="navSmall navbar navbar-dark bg-dark">
        <ol > 
          <li>
              <Link to={`/caracteres`} className="botonEntrar">
                {DatosJson[idioma].personaje}
              </Link>
          </li>
          <li>
              <Link to={`/about`} className="botonEntrar">
                {DatosJson[idioma].about}
              </Link>
          </li>
          <li>
              <Link to={`/contacto`} className="botonEntrar">
                {DatosJson[idioma].contacto}
              </Link>
          </li>
        </ol>
        <div className='contenidoBotonLenguaje'>
        <Lenguaje cambiarIdioma={cambiarIdioma} />
        </div>
        
      </nav>


    </>
  );
}