import { FastifyRequest } from "fastify";

export type PokemonCreateRequest = FastifyRequest<{
	Body: {
        nombre: string ;
        tipo: string ;
        altura: number;
        peso: number;
        habilidades: string;
	};
}>;