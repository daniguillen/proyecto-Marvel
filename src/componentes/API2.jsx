import axios from "axios";

export function API2() {
    const APIKey = "0a34507877d49a06e37aa73911b8070b";
    const hash = "0c125062b0419fa2fcdc9f096a3e78ef";
    const get = "/v1/public/characters";
    const ts = "1";
    const apipart = `ts=${ts}&apikey=${APIKey}&hash=${hash}`;
    const root = "http://gateway.marvel.com";
    const url = `${root}${get}?${apipart}`;
  
    return axios.get(url)
      .then((resp) => {
        const apiData = resp.data.data.results;
        console.log("esta es la api: ", apiData);
        return apiData;
      })
      .catch((error) => {
        console.log("no se puede entrar a la API");
        throw error;
      });
  }