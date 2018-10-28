
import React, { Component } from 'react';
import { View, Text, Picker, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { weekDays } from '../constants';
import { employeeEditing } from '../actions'

class EmployeeForm extends Component {

    renderPickerItems() {
        return weekDays.map((item) => <Picker.Item key={item} label={item} value={item}/>);
    }
    
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Name"
                        value={this.props.name}
                        placeholder="Jim"
                        onChangeText={text => this.props.employeeEditing({ propKey: 'name', value: text })} 
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        value={this.props.phone}
                        placeholder="123-456-789" 
                        keyboardType="phone-pad"
                        onChangeText={value => this.props.employeeEditing(
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
                            this.props.employeeEditing({ propKey: 'shift', value: day })}
                        }
                    >
                        {this.renderPickerItems()}
                    </Picker>
                </CardSection>
            </View>
        );  
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 16,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    
    const {name, phone, shift } = state.employeeForm;
    return {name, phone, shift };
}

export default connect(mapStateToProps, { employeeEditing })(EmployeeForm);

