import { API } from '../../shared/api';

export const getArtesanias = () => async (dispatch) => {
    dispatch({type: 'gettingArtesanias'})
    try {
        const result = await API.get('/artesania')
        dispatch({type: 'getArtesanias', payload: result.data})
    } catch (error) {
        dispatch({type: 'error', payload: error.message})
    }
}