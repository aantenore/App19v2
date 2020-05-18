import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import GoToButton from '../../components/GoToButton/GoToButton';


export default function LoginForm({ navigation }) {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder={insertcode}
                placeholderTextColor='rgba(255,255,255,0.6)'
                returnKeyType="Entra" />
            <GoToButton screen='Home' navigation={navigation} params={{ context: 'customer', table: '1' }} />
        </View>
    );

}

const insertcode = 'Digita il codice'