import { pokemonService } from "../services";
import { PokemonCreateRequest } from "../types/pokemon/pokemon.controller.types";

export const handleGetPokemon = async () => {
    const response = await pokemonService.getPokemon()
    return {
        statusCode: 200,
        msg: 'get Pokemon',
        data: response
    }
}

export const handleCreatePokemon = async (req: PokemonCreateRequest) => {
    const { nombre, tipo , altura, peso, habilidades } = req.body
    return pokemonService.createPokemon({ nombre, tipo, altura, peso, habilidades })
}

export default {
    handleGetPokemon,
    handleCreatePokemon
}