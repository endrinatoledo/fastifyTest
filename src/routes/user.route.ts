import { FastifyInstance } from "fastify";
import userController from "../controllers/user.controller";

const usersRouter = async (app: FastifyInstance) => {

    app.post("/users", userController.handleGetUsers);
    app.post("/users/create", userController.handleCreateUser);
    app.put("/users", userController.handleUpdateUser);
    app.delete("/users", userController.handleDeleteUser);

};

export default usersRouter;
