import { combineReducers } from 'redux'
import { productListReducer } from './Product/product.reducers'
import { userRegisterReducer, userSigninReducer } from './User/user.reducers'

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  productList: productListReducer,
})

export default rootReducer
