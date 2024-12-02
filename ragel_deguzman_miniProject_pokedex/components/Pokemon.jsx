import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Pokemon() {
  const { pokeIndex } = useParams();
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState({
    hp: ' ',
    atk: ' ',
    def: ' ',
    spd: ' ',
    spatk: ' ',
    spdef: ' ',
  });

  const TYPE_COLORS = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#F0B6F0',
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`;
      const pokeRes = await axios.get(pokeUrl);

      setName(pokeRes.data.name);
      setImageUrl(pokeRes.data.sprites.front_default);

      let hp = ' ';
      let atk = ' ';
      let def = ' ';
      let spd = ' ';
      let spatk = ' ';
      let spdef = ' ';

      pokeRes.data.stats.forEach(stat => {
        switch (stat.stat.name) {
          case 'hp':
            hp = stat.base_stat;
            break;
          case 'attack':
            atk = stat.base_stat;
            break;
          case 'defense':
            def = stat.base_stat;
            break;
          case 'speed':
            spd = stat.base_stat;
            break;
          case 'special-attack':
            spatk = stat.base_stat;
            break;
          case 'special-defense':
            spdef = stat.base_stat;
            break;
          default:
            break;
        }
      });

      setStats({ hp, atk, def, spd, spatk, spdef });
      const types = pokeRes.data.types.map(type => type.type.name);
      setTypes(types);
    };

    fetchPokemon();
  }, [pokeIndex]);

  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col-md-3">
              <h5>{pokeIndex}</h5>
            </div>
            <div className="col-7">
              <div className="float-right">
                {types.map(type => (
                  <span key={type} className='badge badge-primary badge-pill mr-1'
                  style={{ backgroundColor: TYPE_COLORS[type],}}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card-body d-flex align-items-center">
          <img 
            src={imageUrl} 
            alt={name} 
            className="card-img-top" 
            style={{ maxWidth: '200px', maxHeight: '200px', marginRight: '15px' }} 
          />
          <div>
            <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
            <h5>Stats</h5>
            <div className="row">
              <div className="col-6">HP: {stats.hp}</div>
              <div className="col-6">Attack: {stats.atk}</div>
              <div className="col-6">Defense: {stats.def}</div>
              <div className="col-6">Speed: {stats.spd}</div>
              <div className="col-6">Sp. Atk: {stats.spatk}</div>
              <div className="col-6">Sp. Def: {stats.spdef}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
