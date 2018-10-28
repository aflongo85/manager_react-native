
import React, { Component } from 'react';
import { Button, Card, Spinner, CardSection, Input } from './common'
import { 
    emailChanged,
    passwordChanged,
    loginUser 
    } from '../actions';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onLoginButtonPress() {
        const credentials = { email: this.props.email, password: this.props.password };
        this.props.loginUser(credentials)
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />
        }

        return (
            <Button whenPressed={this.onLoginButtonPress.bind(this)}>
                    Login
            </Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password" 
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        user: state.auth.user,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
