import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import logo from "../../assets/logo.svg";
import styles from "./styles.module.css";

export function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <header className={styles.container}>
      <img onClick={() => navigate("/")} src={logo} alt="Pokemon-Final" />

      <div className={styles.links}>
        {user && (
          <NavLink
            to="/ranking"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Ranking
          </NavLink>
        )}
        {user && (
          <NavLink
            to="/pokedex"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Pokedex
          </NavLink>
        )}
      </div>
    </header>
  );
}
