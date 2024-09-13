import { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import styles from "./styles.module.css";
import { PokemonDetails } from "./PokemonDetails";
import { useDispatch } from "react-redux";
import pokeapi from "../../services/pokeapi";
import { addPokemon } from "../../store/slices/pokemon";

export function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  const dispatch = useDispatch();


  useEffect(() => {
    pokeapi.getPokemons(1).then((response) => {
      setPokemons(response.pokemons);
      //setCount(response.totalOfPokmons);
    });
  }, []);

  const handleClickPokemon = (pokemon) => {
    dispatch(addPokemon(pokemon));
    console.log("Pokemon::", pokemon);
  };

  return (
    <div className={styles.pokedex}>
      <div className={styles.pokemons}>
        <div className={styles.pokemonList}>
          {pokemons.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => handleClickPokemon(pokemon)}
            />
          ))}
        </div>
      </div>
      <PokemonDetails />
    </div>
  );
}
