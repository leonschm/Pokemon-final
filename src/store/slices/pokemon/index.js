import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemon: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,

  reducers: {
    addPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    removePokemon: (state) => {
      state.selectedPokemon = null;
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;

export const selectPokemon = (state) => state.pokemon.selectedPokemon;

export default pokemonSlice.reducer;
