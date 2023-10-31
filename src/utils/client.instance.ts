import got from "got";
import qs from "qs";
import { SearchCriteria } from "../types/moodle/moodle.types";
import dotenv from "dotenv";
dotenv.config();

const baseURL = `${process.env.MOODLE_BASE_URL}/webservice/rest/server.php`;
const token = process.env.MOODLE_TOKEN;

const client = async (functionName: string, params:any) =>{
    
    const searchParams:any = {
        wstoken: token,
        moodlewsrestformat: 'json',
        wsfunction: functionName,
    };
    if (params.usersData) searchParams.users = params.usersData.users;
    if (params.criteria) searchParams.criteria = params.criteria

    const url = `${baseURL}?${qs.stringify(searchParams)}`;

    try {
        const response = await got(url, { responseType: 'json' });
        return response.body;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Unknown error occurred');
        }
    }
}

export default client;

