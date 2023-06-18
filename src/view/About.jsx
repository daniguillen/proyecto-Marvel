import React from 'react';
import { DatosJSON } from '../componentes/DatosJSON';

export function About({ idioma }) {
  console.log(idioma);

  const Datos = DatosJSON();
  const nombre = Datos[idioma].nombre;
  const apellido = Datos[idioma].apellido;
  const descripcion = Datos[idioma].descripcion;

  return (
    <>
      <div>
        <h2>{nombre} {apellido}</h2>
        <div><img src="" alt="" /></div>
        <div dangerouslySetInnerHTML={{ __html: descripcion }} />
      </div>
    </>
  );
}