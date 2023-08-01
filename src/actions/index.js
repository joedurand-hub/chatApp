import { LOGIN } from './constants';

export const actionLogin = (dispatch) => async (loading, data, error) => {
  try {
    return dispatch({ type: LOGIN, payload: {loading, data, error} })
  }
  catch (error) {
    console.error('Error en la llamada a la API: ', error);
  }
} 
