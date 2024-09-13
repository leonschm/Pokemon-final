import { Profile } from "../../components/Profile";
import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import pokeapi from "../../services/pokeapi";
import { addPokemon } from "../../store/slices/pokemon";

export function Ranking() {
  
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
    <div className={styles.ranking}>
      <h2>Lista Pokemons</h2>

      <main className={styles.profiles}>
        {pokemons.map((pokemon) => (
          <Profile 
           key={pokemon.id}
           pokemon={pokemon}
           onClick={() => handleClickPokemon(pokemon)}
          />
        ))}
      </main>
    </div>
  );
}
