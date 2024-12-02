import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard';

export default function PokeList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setPokemon(res.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [url]);

  return (
    <React.Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='row'>
          {pokemon.map(p => (
            <PokeCard key={p.name} name={p.name} url={p.url} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
