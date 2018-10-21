
import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { textInputStyle, labelStyle, containerStyle } = styles;
    console.log(label);
    
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value} 
                onChangeText={onChangeText}
                style={textInputStyle}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 16,
        paddingLeft: 20,
        flex: 1
    },
    textInputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
};

export { Input };
