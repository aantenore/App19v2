import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';


export default class LoginForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                placeholder={insertcode}
                placeholderTextColor='rgba(255,255,255,0.6)'
                returnKeyType="Entra"/>
                <TouchableOpacity style={styles.loginbutton}>
                    <Text style={styles.buttontext}>Entra</Text>
                </TouchableOpacity>
            </View>


        );
    }
}

const insertcode =  'Digita il codice'