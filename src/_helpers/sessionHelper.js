import LocalStorageHelper from './LocalStorageHelper';

export const validateSession = () => {
    if(LocalStorageHelper.getToken() == null)
        return false;
    
    return true;
}