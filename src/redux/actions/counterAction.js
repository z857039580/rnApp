
import * as types from '../constants/counterType'

// export function reduce() {
//     return {type:types.REDUCE}
// }
//
// export function add() {
//     return {type:types.ADD}
// }

const reduce = ()=> {
    return {type:types.REDUCE}
}

const adda = ()=> {
    return {type:types.ADD}
}

const add = ()=> {
    return dispatch => {
        setTimeout(function () {
            dispatch(adda());
        },2000)
    }
}


export default{
    add,
    reduce
}