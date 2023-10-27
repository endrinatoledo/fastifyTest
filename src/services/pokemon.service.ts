import { PokemonAttributes } from '../types/pokemon/pokemon.model.types'
import db from "../models";
const PokemonModel = db.PokemonModel;
export const getPokemon = async (): Promise<PokemonAttributes[]> => {
    
    try {
        const response: PokemonAttributes[] = await PokemonModel.findAll();
        return response 
    } catch (error) {
        throw error;
    }
}

export const createPokemon = async (pokemon: PokemonAttributes): Promise<PokemonAttributes> => {
    
    try {
        const response = await PokemonModel.create(pokemon)
        const createdPokemon = response.get({ plain: true });
        return createdPokemon
    } catch (error) {
        throw error;
    }
}
export default {
    getPokemon,
    createPokemon
}