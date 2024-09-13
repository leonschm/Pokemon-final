import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import pokemonImg from "../../assets/pokemon.png";
import logo from "../../assets/logo.svg";

import styles from "./styles.module.css";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/ranking";

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = { name: formData.get("username") };

    auth.signin(user, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <main className={styles.login}>
          <img src={logo} alt="Pokemon-Final" />
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Nome de usuário</label>
            <input
              type="text"
              name="username"
              required
              placeholder="username"
            />
            <button type="submit">Entrar</button>
          </form>
        </main>

        <aside>
          <img src={pokemonImg} alt="pokemon background" />
        </aside>
      </div>
    </div>
  );
}
