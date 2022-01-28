import { combineReducers } from 'redux'
import { userRegisterReducer, userSigninReducer } from './User/user.reducers'

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
})

export default rootReducer
