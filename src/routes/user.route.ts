import { FastifyInstance } from "fastify";
import userController from "../controllers/user.controller";

const usersRouter = async (app: FastifyInstance) => {

    app.post("/users", userController.handleGetUsers);
    app.post("/users/create", userController.handleCreateUser);
};

export default usersRouter;
