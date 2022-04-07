import {ADD_ONE, MINUS_ONE} from './action'

const initialState={
    number: 0
}

function reducers(state=initialState,action){
    switch(action.type){
        case ADD_ONE:{
            console.log(action.type)
            return state.number + 1
        }
        case MINUS_ONE:{
            return state.number - 1
        }
        default:{
            return state
        }

    }
}
export default reducers