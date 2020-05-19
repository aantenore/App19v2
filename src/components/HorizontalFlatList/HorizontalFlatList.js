import React from 'react';
//import  {HorizontalFlatlistItem}  from './HorizontalFlatlistItem';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, Platform } from 'react-native';
import HorizontalFlatlistItem from './HorizontalFlatlistItem';
import styles from '../styles';
import {categories} from '../../data/dataArrays'

var temp = categories.pop().photo_url;

export default class HorizontalFlatList extends React.Component {
    constructor(props) {
        super(props);
    }
    renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,0.7)' onPress={() => {}}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: temp }} />
            <Text style={styles.title}>{item}</Text>
          </View>
        </TouchableHighlight>
      );
    /*renderCategory = ({ item }) => (
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
    );*/

    render() {
        return (/*
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
    }*/

    <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={this.props.data}
        renderItem={this.renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />);
    }
}