import {combineReducers} from 'redux'
import loginIn from './loginReducer'
import counter from './counterReducer'
import AppReducer from './appReducer'

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState,action) {
        if (handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state,action)
        }else{
            return state
        }
    }
}

const rootReducer = combineReducers({
    loginIn:loginIn,
    counter:counter,
    AppReducer:AppReducer
})

export default rootReducer;//导出，作为统一入口