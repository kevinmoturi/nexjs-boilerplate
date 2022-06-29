import { CAT_BREEDS } from './../types/index';

const initialState = {

    data: [],

};

export default function BreedReducer (state = initialState, action: { type: any; payload: any; }) {

    switch(action.type) {

        case CAT_BREEDS: 

            return  {

                data: action.payload

            };

        default:

            return state;

    }

};