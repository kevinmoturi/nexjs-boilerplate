import { CAT_BREEDS } from './../types/index';
import instance from './../../utils/instance';

export const getUsers = () => async (dispatch: (arg0: { type: any; payload: any; }) => void) => {

    try {

        const response = await instance.get('users?page=1&limit=10');

        dispatch({ type: CAT_BREEDS, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error;
        
    }

};