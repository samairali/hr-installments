import { createStore } from "redux";
import rootReducer from './Reducers'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import firebaseDatabase from '../FirebaseConfig/FirebaseConfiguration';


export default createStore(
	rootReducer , 
	applyMiddleware(thunk.withExtraArgument({firebaseDatabase})))