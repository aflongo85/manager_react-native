
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    
    return (
        <TouchableOpacity onPress={props.whenPressed} style={buttonStyle}>
            <Text style={textStyle}>{props.children}</Text>
        </TouchableOpacity> 
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 5, 
        marginRight: 5, 
        borderColor: '#007aff',
    },

    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 12,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

export { Button }; 
