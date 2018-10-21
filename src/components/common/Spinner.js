
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ spinnerSize }) => (
    <View style={styles.spinnerStyle}>
        <ActivityIndicator size={spinnerSize || 'small'} />
    </View>
);

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
