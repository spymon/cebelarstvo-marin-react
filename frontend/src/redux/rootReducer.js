import { combineReducers } from 'redux'
import { UserRegisterReducer } from './User/user.reducers'

const rootReducer = combineReducers({
  userRegister: UserRegisterReducer,
})

export default rootReducer
