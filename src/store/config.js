import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemon";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
