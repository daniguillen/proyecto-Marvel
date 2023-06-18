import axios from "axios";

import { useEffect, useState } from "react";
export function API(){

    const APIKey = "0a34507877d49a06e37aa73911b8070b";
    const hash = "0c125062b0419fa2fcdc9f096a3e78ef";
    const get = "/v1/public/characters"
    const ts = "1";
    const apipart= `ts=${ts}&apikey=${APIKey}&hash=${hash}`
    const root = "http://gateway.marvel.com" 

    
    
    const url = `${root}${get}?${apipart}`;

//solo necesito concatener ?ts=1&apikey=0a34507877d49a06e37aa73911b8070b&hash=0c125062b0419fa2fcdc9f096a3e78ef


const [personajes, setPersonajes] = useState([]);

useEffect(() => {
    axios
      .get(url)
       .then((resp) => {
        const apiData = resp.data.data.results;
        setPersonajes(apiData);
        console.log("esta es la api: ", apiData);
      })
      .catch(() => {
        console.log("no se puede entrar a la API");
      });
  }, [url]);


    return(
        personajes
    )
}