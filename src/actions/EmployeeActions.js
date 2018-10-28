
//import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_EDITING, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

 
const employeeEditing = ({ propKey, value }) => {
    
    return {
        type: EMPLOYEE_EDITING,
        payload: { propKey, value }
    };
};

const employeeCreate = ({ name, phone, shift }) => {
    
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop()
            });
    };
};

const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
            Actions.pop();
            console.log("Employee Updated")
        });
    };
}

const employeeFetch = () => {

    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch(
                    { type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() }
                );
            });
    }
}

export { employeeEditing, employeeCreate, employeeFetch, employeeSave };
