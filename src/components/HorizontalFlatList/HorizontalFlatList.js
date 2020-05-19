import React from 'react';
//import  {HorizontalFlatlistItem}  from './HorizontalFlatlistItem';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, Platform } from 'react-native';
import HorizontalFlatlistItem from './HorizontalFlatlistItem';

export default class HorizontalFlatList extends React.Component {
    constructor(props) {
        super(props);
    }
    renderCategory = ({ item }) => (
        <TouchableHighlight  underlayColor='rgba(73,182,77,0.7)' >
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                width: 50,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'grey',
                margin: 4
            }}>
                <Text>{item.id}</Text>
            </View>
        </TouchableHighlight>
    );

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: Platform.OS === 'ios' ? 34 : 0,
               
            }}>
                <View style={{ height: 80 }}>
                    <FlatList style={{
                        backgroundColor: 'black',
                        opacity: 0.5
                    }}
                        data={data}
                        horizontal={true}
                        renderItem={this.renderCategory}
                        keyExtractor={item => `${item.id}`}

                   />
                </View>

            </View>
        );
    }
}

var data = {
    cibo: {
        id: 'cibo'
    },
    drink: {
        id: 'drink'
    },
    sigarette: {
        id: 'sigarette'
    },
    droga: {
        id: 'droga'
    },
    fede: {
        id: 'fede'
    },
};