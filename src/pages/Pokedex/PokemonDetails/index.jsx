/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectPokemon } from "../../../store/slices/pokemon";

export function PokemonDetails() {
  
  const pokemon = useSelector(selectPokemon);

  return (
    <div className={styles.pokemonDetails}>
      {!pokemon ? (
        <p> Clique em um pokemon para ver suas informações.</p>
      ) : (
        <>
          <img src={pokemon?.image} />
          <span>#{pokemon?.id}</span>
          <h2>{pokemon?.name}</h2>
          <p>{pokemon.species} Pokemon</p>
          <div className={styles.types}>
            {pokemon.types.map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
          <div className={styles.pokedexEntry}>
            <strong>POKÈDEX ENTRY</strong>
            <p>
             {pokemon.description || "Não disponivel!!!"}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
