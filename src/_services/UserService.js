import {fetchRetrive} from './FetchService';
import LocalStorageHelper from '../_helpers/LocalStorageHelper';
import {apiUrl,resources, options} from '../config/apiConfig';
const {user} = resources;
const {listAll} = options;

export default class UserService{

    static async findAll(){
        return await fetchRetrive(apiUrl + user + listAll, 'GET', {
                'Authorization': `Bearer ${LocalStorageHelper.getToken()}`
            }); 
    }
}