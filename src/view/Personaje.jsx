import { useEffect, useState } from 'react';
import axios from "axios";
import "../css/personaje.css"

export function Personaje() {
  const [personaje, setPersonaje] = useState(null);
  const [error, setError] = useState(false);

  let query = new URLSearchParams(window.location.search);
  let personajeID = query.get('personajeID');
  console.log("este es mi personaje", personajeID)

  useEffect(() => {
    axios
      .get(`http://gateway.marvel.com/v1/public/characters/${personajeID}?ts=1&apikey=0a34507877d49a06e37aa73911b8070b&hash=0c125062b0419fa2fcdc9f096a3e78ef`)
      .then((resp) => {
        const apiData = resp.data.data.results;
        setPersonaje(apiData);
      })
      .catch(() => {
        setError(true);
      });
  }, [personajeID]);

  if (error) {
    return <h2>No se pudo cargar la API</h2>;
  }

  console.log("este es el personaje:", personaje);


  


  return (
    <div className="containerPersonaje">
      <div></div>
      <div className="descripcionPersonaje">
        <ol>
          <li className='imagenDescrion'>
            {personaje && personaje.length > 0 && (
              <img
                src={`${personaje[0].thumbnail.path}.${personaje[0].thumbnail.extension}`}
                alt={personaje[0].name}
              />
            )}
          </li>
          <div className='descripcionContenedorContenido'>

            <li>
                <small>Nombre: {personaje && personaje.length > 0 ? personaje[0].name : null}</small>
            </li>
            <li>
                <small>Descripción: {personaje && personaje[0].description && personaje[0].description.length > 0 ? personaje[0].description : <small>No se encontró descripción</small>}</small>
            </li>
            <li>
                <small>Comics: {personaje && personaje.length > 0 ? personaje[0].comics.available : <small>No se encontraron comics</small>}</small>
            </li>
            <li>
                <small>Número de historias: {personaje && personaje.length > 0 ? personaje[0].stories.available : null}</small>
            </li>
            <li>
                <small>Número de series: {personaje && personaje.length > 0 ? personaje[0].series.available : null}</small>
            </li>
            <li>
                <small>Apariciones en cómics: {personaje && personaje.length > 0 ? personaje[0].comics.available : null}</small>
            </li>
            <li>
                <small>Apariciones en series: {personaje && personaje.length > 0 ? personaje[0].series.available : null}</small>
            </li>
            <li>
                <small>Apariciones en eventos: {personaje && personaje.length > 0 ? personaje[0].events.available : null}</small>
            </li>
          </div>
        </ol>
      </div>
    </div>
  );
}
