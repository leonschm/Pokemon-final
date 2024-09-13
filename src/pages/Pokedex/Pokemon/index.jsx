import styles from "./styles.module.css";

export function Pokemon({ pokemon, onClick }) {
  return (
    <div onClick={onClick} className={styles.pokemon}>
      <img src={pokemon.image} />
      <div className={styles.details}>
        <span>#{pokemon.id}</span> <strong>{pokemon.name}</strong>
        <div className={styles.types}>
          {pokemon.types.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
