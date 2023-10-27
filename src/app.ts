import fastify, { FastifyServerOptions } from "fastify";
import {pokemonRouter} from "./routes";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	
	app.get("/", async () => "SERVER");
	app.register(pokemonRouter, { prefix: "/api/pokemon" });
	return app
}
export default App

