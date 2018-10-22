
import {
    EMPLOYEE_CREATION
} from '../actions/types';

const INITAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITAL_STATE, action) => {
    console.log("CIAO");
    console.log(action.type)
    switch(action.type) {
        case EMPLOYEE_CREATION:
            return { ...state, [action.payload.propKey]: action.payload.value }
        default:
        return state;
    }
};