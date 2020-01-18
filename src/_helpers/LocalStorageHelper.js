const TOKEN = 'TOKEN_LS';

export default class LocalStorageHelper{

    static saveToken(token){
        localStorage.setItem(TOKEN, token);
        return token;
    }

    static getToken(){
        return localStorage.getItem(TOKEN);
    }

    static removeToken(){
        localStorage.removeItem(TOKEN);
    }

    static saveObject(id, obj){
        localStorage.setItem(id, JSON.stringify(obj));
        return obj;
    }

    static getObject(id){
        return JSON.parse(localStorage.getItem(id));
    }

    static removeObject(id){
        localStorage.removeItem(id);
    }

    static clear(){
        localStorage.clear();
    }
}