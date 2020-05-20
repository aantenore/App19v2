import React from 'react';
import { FlatList, Text, View, Image, ImageBackground, TouchableHighlight, } from 'react-native';

import internalstyle from './styles'
import { categories } from '../../data/dataArrays'

var temp = categories.pop().photo_url;

export default class HorizontalFlatList extends React.Component {
    constructor(props) {
        super(props);
    }
    renderRecipes = ({ item }) => (
        <TouchableHighlight activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert(item + ' pressed')}>
            <View style={internalstyle.container}>
                {/* <ImageBackground style={internalstyle.image} source={{ uri: temp }} /> */}
                <Text style={internalstyle.title}>{item}</Text>
            </View>
        </TouchableHighlight>
    );

    render() {
        return (
            <View style={internalstyle.flatlistcontainer}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    numColumns={1}
                    data={this.props.data}
                    renderItem={this.renderRecipes}
                    keyExtractor={item => `${item.recipeId}`}
                />
            </View>);
    }
}