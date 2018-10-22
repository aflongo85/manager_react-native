

import React, { Component } from 'react';
import { Picker, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreationAction } from '../actions'
import { Card, CardSection, Input, Button } from './common'
import { weekDays } from '../constants'

//const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

class EmployeeCreate extends Component {

    renderPickerItems() {
        return weekDays.map((item) => <Picker.Item key={item} label={item} value={item}/>);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        value={this.props.name}
                        placeholder="Jim"
                        onChangeText={text => this.props.employeeCreationAction({ propKey: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        value={this.props.phone}
                        placeholder="123-456-789" 
                        keyboardType="phone-pad"
                        onChangeText={value => this.props.employeeCreationAction(
                            {
                                propKey: 'phone',
                                value //used this just to show the ES6 shorthand
                            }
                        )}    
                    />
                </CardSection>
               
                <CardSection style={{ flexDirection: 'column' }}>
                   <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker 
                        selectedValue={this.props.shift}
                        onValueChange={day => {
                            Keyboard.dismiss()
                            this.props.employeeCreationAction({ propKey: 'shift', value: day })}
                        }
                    >
                        {this.renderPickerItems()}
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
                
            </Card>
        );
    };
}

const styles = {
    pickerTextStyle: {
        fontSize: 16,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift} = state.employeeForm;
    return { name, phone, shift }
};

export default connect(mapStateToProps, { employeeCreationAction }) (EmployeeCreate);
