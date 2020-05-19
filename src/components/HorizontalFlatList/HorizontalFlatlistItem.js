import React, { Component} from 'react';
import { View } from 'react-native';
export default class HorizontalFlatlistItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                width: 70,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'grey',
                margin: 4
            }}>

            </View>
        );
    }
}