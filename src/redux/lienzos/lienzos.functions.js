import { API } from '../../shared/api';

export const getLienzos = () => async (dispatch) => {
    dispatch({type: 'gettingLienzos'})
    try {
        const result = await API.get('/lienzo')
        dispatch({type: 'getLienzos', payload: result.data})
    } catch (error) {
        dispatch({type: 'error', payload: error.message})
    }
}