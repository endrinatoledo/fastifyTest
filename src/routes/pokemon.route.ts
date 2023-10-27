import { FastifyInstance } from "fastify"; 
import { pokemonController } from "../controllers";

const pokemonRouter = async (app: FastifyInstance) => {

    app.get("/", pokemonController.handleGetPokemon);
    app.post("/", pokemonController.handleCreatePokemon);

};

export default pokemonRouter;