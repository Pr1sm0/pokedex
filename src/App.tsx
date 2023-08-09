import React, { lazy, Suspense, useEffect, useState } from 'react';

import axios from 'axios';

import classes from './App.module.css';
import PokemonItem from './components/pokemon-item';
import TypeFilter from './components/type-filter';

const Details = lazy(() => import('./components/details'));

function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [loadMoreLink, setLoadMoreLink] = useState<string>('https://pokeapi.co/api/v2/pokemon/?limit=12');
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);

  useEffect(() => {
    getPokemons();
    getTypes();
  }, []);

  const getPokemons = async () => {
    axios.get(loadMoreLink).then(({ data }) => {
      setLoadMoreLink(data.next);
      const promises = data.results.map((result: any) => axios.get(result.url));
      Promise.all(promises).then((response) => {
        const pokemonsList = response.map(({ data }) => {
          return {
            id: data.id,
            name: data.name,
            types: data.types,
            avatar: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            spAttack: data.stats[3].base_stat,
            spDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
            weight: data.weight,
            totalMoves: data.moves.length,
          };
        });
        setPokemons([...pokemons, ...pokemonsList]);
      });
    });
  };

  const getTypes = () => {
    axios
      .get('https://pokeapi.co/api/v2/type?limit=999')
      .then(({ data }) => setTypes(data.results.map((item: any) => item.name)));
  };

  const filterPokemons = (type: string, pokemons: any) =>
    pokemons.filter((pokemon: any) => pokemon.types.some((item: any) => item.type.name === type));

  const handleSelectTypeChange = (e: any) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Pokedex</h1>
      {pokemons.length > 0 ? (
        <>
          <TypeFilter types={types} handleChange={handleSelectTypeChange} />
          <div className={classes.wrapper}>
            <div className={classes.itemsWrapper}>
              {(selectedType ? filterPokemons(selectedType, pokemons) : pokemons).map((pokemon: any) => (
                <PokemonItem
                  key={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                  avatarUrl={pokemon.avatar}
                  openDetails={() => setSelectedPokemon(pokemon)}
                />
              ))}
              <button className={classes.loadMoreButton} onClick={getPokemons}>
                Load More
              </button>
            </div>
            <Suspense fallback={null}>{selectedPokemon && <Details selectedPokemon={selectedPokemon} />}</Suspense>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
