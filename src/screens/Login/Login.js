import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, KeyboardAvoidingView } from 'react-native';

import styles from './styles';
import logo from './../../../assets/icon.png'
import LoginForm from './LoginForm';


export default class LoginScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="position" style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.formcontainer}>
                    <LoginForm navigation={this.props.navigation}/>
                </View>

            </KeyboardAvoidingView>


        );
    }
}
/*
LoginScreen.propTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
};*/

