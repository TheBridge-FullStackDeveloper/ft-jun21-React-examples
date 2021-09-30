import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useFetch from "../../hooks/fetch-hook";

const Contact =  () => {
  
    const [pokemons, setPokemons] = useState([]);

    const {loading,result} = useFetch("https://pokeapi.co/api/v2/pokemon")

    useEffect(()=>{
      setPokemons(result.results)
    }, [result])
  

    return (
      <section>
        <h1>Contacto</h1>
        <ul>
        {loading?<p>Cargando...</p>:pokemons.map((pokemon, i)=>
            <li key={i}>Trabajador: {pokemon.name}. URL contacto: {pokemon.url}</li>
        )}

        </ul>
      </section>
    )
}
 
export default Contact
