import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeEditing, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

    componentWillMount() {
        console.log(this.props.employee);

        _.each(this.props.employee, (value, propKey) => {
            this.props.employeeEditing({ propKey, value })
        })
    }

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;
        console.log(name, phone, shift);
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextButtonPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button whenPressed={this.onSaveButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button whenPressed={this.onTextButtonPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect( mapStateToProps, { employeeEditing, employeeSave })(EmployeeEdit);