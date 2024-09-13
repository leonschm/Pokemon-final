import { axios } from "../../lib/axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

class PokeApi {
  async getPokemons(page = 1, limit = 12, offset = 0) {
    try {
      const { data } = await axios.get(BASE_URL, {
        params: { limit, offset, },
      });

      const parsedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const { data: pokeDetails } = await axios.get(pokemon.url);

          return {
            name: pokeDetails.name,
            id: pokeDetails.id,
            image: pokeDetails.sprites.front_default,
            types: pokeDetails.types.map((typeInfo) => typeInfo.type.name),
          };
        })
      );

      return { pokemons: parsedPokemons, totalOfPokmons: data.count };
    } catch (error) {
      console.error("ERROR:", error);
      return [];
    }
  }
}
export default new PokeApi();
