import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import users from './usersReducer'
import questions from './quesReducer';
export default combineReducers({
    auth,
    token,
    users,
    questions
})