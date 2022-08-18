import pokeApi from "../api/pokeApi";
import { Pokemon, Sprites } from "../interfaces";

export const getPokemonInfo = async(nameOrId: string) => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    const pokemon = {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

    return pokemon;
}