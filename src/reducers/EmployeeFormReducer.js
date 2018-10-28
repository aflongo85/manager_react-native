
import {
    EMPLOYEE_EDITING,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';
import { MONDAY } from '../constants/strings';


const INITAL_STATE = {
    name: '',
    phone: '',
    shift: MONDAY 

};

export default (state = INITAL_STATE, action) => {
    
    switch(action.type) {
        case EMPLOYEE_EDITING:
            return { ...state, [action.payload.propKey]: action.payload.value }
        case EMPLOYEE_CREATE:
            return INITAL_STATE
        case EMPLOYEE_SAVE_SUCCESS:
            return INITAL_STATE;
        default:
        return state;
    }
};