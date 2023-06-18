import { Link } from 'react-router-dom';

import { API2 } from "../componentes/API2";
import { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export function Caracteres() {
const imagenes= [ ]
  /*
  const personajes=API()
  console.log(personajes)*/

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API2();
        console.log("la primera data", data);
        setPersonajes(data);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    };

    fetchData();
  }, []);

  console.log("los personajes que me trae la api", personajes);

  const elementosJSX = personajes !==null? (
    personajes.map((caracteres, i) => {
      if (caracteres.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
        if (
          caracteres.thumbnail &&
          caracteres.thumbnail.path !== undefined &&
          caracteres.thumbnail.extension !== undefined &&
          imagenes.length < 20
        ) {
          imagenes.push(`${caracteres.thumbnail.path}.${caracteres.thumbnail.extension}`);
          console.log("esta es la imagen", caracteres.thumbnail.path, ".", caracteres.thumbnail.extension);
        }
      return (
          <div className="card" key={i} style={{ width: '19rem' }}>
            <img
              style={{ height: '70%' }}
              src={`${caracteres.thumbnail.path}.${caracteres.thumbnail.extension}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <Link to={`/personaje?personajeID=${caracteres.id}`} className="botonEntrar">
                {caracteres.name}
              </Link>
            </div>
          </div>
        );
      } else {
        return null;
      }
    })
  ) : (
    <h2>No se encontraron datos</h2>
  );


  

  // Lógica del carrusel
  const imagenesCarrousel = [];
if (personajes !== null && imagenes.length > 0) {
  while (imagenesCarrousel.length < 3) {
    let indice = Math.floor(Math.random() * imagenes.length);
      
    if (!imagenesCarrousel.includes(indice)) {
      imagenesCarrousel.push(indice);
    }
  }
  }

  const slides = [
    <img key="1" src={imagenes[imagenesCarrousel[0]]}  alt="Marvel Character 1" className='imagenesCarrouser' />,
    <img key="2" src={imagenes[imagenesCarrousel[1]]}  alt="Marvel Character 2" className='imagenesCarrouser'/>,
    <img key="3" src={imagenes[imagenesCarrousel[2]]}  alt="Marvel Character 3" className='imagenesCarrouser'/>
  ];



  return (
    <>
    
      <AliceCarousel autoPlay autoPlayInterval={2000} infinite>
        {slides}
      </AliceCarousel>
      
      <div className="d-flex flex-wrap justify-content-center m-4 ml-20">
        {elementosJSX}
      </div>
    </>
  );
}