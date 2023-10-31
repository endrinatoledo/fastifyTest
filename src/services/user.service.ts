import { CreateUsersResponse, UserGeneratedPassword, UserProvidedPassword } from "types/user/user.types";
import { SearchCriteria } from "../types/moodle/moodle.types";
import  client  from "../utils/client.instance";

export const handleGetUsers = async (criteria: SearchCriteria[]) => {
    const params = {
        criteria
    }

    const result:any = await client("core_user_get_users", params);
    if (result.exception) throw new Error(result.message);
    
    return result;
}

export const handleCreateUser = async (usersData:any): Promise<any> => {
    const params = {
        usersData
    }

    const result: any = await client("core_user_create_users", params);
    if (result.exception) throw new Error(result.message);

    return result;
}
export default {
    handleGetUsers,
    handleCreateUser
};


