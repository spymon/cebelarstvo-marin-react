import axios from 'axios'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from './user.types'

export const register = (name, email, password) => async dispatch => {
  dispatch({ type: USER_REGISTER_REQUEST })
  try {
    const { data } = await axios.post('/api/users/register', {
      name,
      email,
      password,
    })
    console.log(data)
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
