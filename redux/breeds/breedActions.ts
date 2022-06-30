import { AppThunk } from '../store';
import instance from '../../utils/instance';
import { setBreedsData } from './breedSlice'

export const fetchBreedsData = (): AppThunk => async dispatch => {
    let response = await instance.get('breeds?limit=20');
    dispatch(setBreedsData(response?.data));
};