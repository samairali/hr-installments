import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import FirestoreReducer from './FirestoreReducer'

const rootReducer = combineReducers({
    user : UserReducer,
    firestore : FirestoreReducer
})
export default rootReducer