import { combineReducers } from 'redux';
import dataReducer from './dataReducer'
import showsReducer from './taskReducer'

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        data: dataReducer,
        shows: showsReducer
    })
} 

