// import { SearchCriteria } from "types/moodle/moodle.types";
import { userService } from "../services";

export const handleGetUsers = async (req: any) => {
    const { criteria } = req.body;
    const result = await userService.handleGetUsers(criteria);

    return {
        statusCode: 200,
        msg: 'get users ok',
        data: result,
    };
}

export const handleCreateUser = async (req: any) => {
    const usersData = req.body;
    const result = await userService.handleCreateUser(usersData);
    return {
        statusCode: 200,
        msg: 'create user ok',
        data: result,
    };
}

export const handleUpdateUser = async (req: any) => { 
    const usersData = req.body;
    const result = await userService.handleUpdateUser(usersData);
    return {
        statusCode: 200,
        msg: 'update user ok',
        data: result,
    };
}

export const handleDeleteUser = async (req: any) => { 
    const userids = req.body;
    const result = await userService.handleDeleteUser(userids);
    return {
        statusCode: 200,
        msg: 'delete user ok',
        data: result,
    };
}

export default {
    handleGetUsers,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser
}
