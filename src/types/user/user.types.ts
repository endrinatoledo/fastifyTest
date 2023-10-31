export interface Warning {
    item?: string;
    itemid?: number;
    warningcode: string;
    message: string;
}


export interface CustomField {
    type: string;
    value: string;
    name: string;
    shortname: string;
}

export interface Preference {
    name: string;
    value: string;
}
export interface User {

    id: number;
    username?: string;
    firstname?: string;
    lastname?: string;
    fullname: string;
    email?: string;
    address?: string;
    phone1?: string;
    phone2?: string;
    icq?: string;
    skype?: string;
    yahoo?: string;
    aim?: string;
    msn?: string;
    department?: string;
    institution?: string;
    idnumber?: string;
    interests?: string;
    firstaccess?: number;
    lastaccess?: number;
    auth?: string;
    suspended?: boolean;
    confirmed?: boolean;
    lang?: string;
    calendartype?: string;
    theme?: string;
    timezone?: string;
    mailformat?: number;
    description?: string;
    descriptionformat?: string;
    city?: string;
    url?: string;
    country?: string;
    profileimageurlsmall: string;
    profileimageurl: string;
    customfields?: CustomField[];
    preferences?: Preference[];
}
export interface GetUsersResponse {
    users: User[];
    warnings?: Warning[];
}

export interface UserProvidedPassword extends User {
    password: string;
}

export interface UserGeneratedPassword extends User {
    createpassword: true;
}
interface CreatedUser {
    id: number;
    username: string;
}

export interface CreateUsersResponse {
    users: CreatedUser[];
}