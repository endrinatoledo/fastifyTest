import fastify, { FastifyServerOptions } from "fastify";
import {  usersRouter } from "./routes";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	
	app.get("/", async () => "SERVER");
	app.register(usersRouter, { prefix: "/api/fastify" });
	return app
}
export default App

