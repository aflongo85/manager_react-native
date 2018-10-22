
//import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_CREATION } from './types';

 
const employeeCreationAction = ({ propKey, value }) => {
    
    return {
        type: EMPLOYEE_CREATION,
        payload: { propKey, value }
    };
};

export { employeeCreationAction };//