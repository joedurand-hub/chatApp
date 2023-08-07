import { LOGIN, TRAER_USUARIOS } from './constants';

export const actionLogin = (dispatch) => async (loading, data, error) => {
  try {
    return dispatch({ type: LOGIN, payload: {loading, data, error} })
  }
  catch (error) {
    console.error('Error en la llamada a la API: ', error);
  }
} 


export const actionGetAllUsers = (dispatch) => async (loading, data, error) => {
  try {
    return dispatch({type: TRAER_USUARIOS, payload: {loading, data, error} })
  } catch (error) {
    console.log('Error en la llamada a la API: ', error)
  }
}