import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/counter';

const INITIAL_STATE = {
    count: 0
}

export default function(currentState = INITIAL_STATE, action){
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {count: currentState.count+1}
            break;
        case DECREMENT_COUNTER:
            return {count: currentState.count-1}
            break;
        default:
            return currentState;
    }
}