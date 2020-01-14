import {fetchBody} from './FetchService';
import {apiUrl,resources} from '../config/apiConfig';

const url = apiUrl + resources.login;

const headers = {
    'Content-Type': 'application/json'
}

export const loginService = async (body) => {
    return await fetchBody(url,'POST', headers, body);
}

export const validateLogin = (data) => {
    if(data.status === 200)
        return true;
    return false;
}