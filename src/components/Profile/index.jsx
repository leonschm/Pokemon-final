import { useAuth } from "../../hooks/useAuth";
import styles from "./styles.module.css";
import pokeballImg from "../../assets/3.svg";

export function Profile({pokemon , onClick}) {
  const { user } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={pokemon.image} />
        <strong>{pokemon.name}</strong>
      </div>

      <span className={styles.steps}><img src={pokeballImg} alt="pokemon ball" /></span>
    </div>
  );
}
