import * as types from '../constants/appType'
import {createReducer} from './index'

const initialState = {
    status:'点击登陆',
    userName:''
}

const actionHandler = {
    [types.CONNECT_XMPP]:(state,action)=>{
        return {
            ...state,
            status:action.status,
        }
    },
    [types.CONNECT_XMPP_ING]:(state,action)=>{
        return {
            ...state,
            status:action.status,
        }
    },
    [types.USER_NAME]:(state,action)=>{
        return {
            ...state,
            userName:action.userName,
        }
    },
}

export default createReducer(initialState,actionHandler)
