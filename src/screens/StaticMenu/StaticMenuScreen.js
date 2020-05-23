import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import { categories } from '../../data/dataArrays';
import HorizontalFlatList from './../../components/HorizontalFlatList/HorizontalFlatList'
import Getter from '../../service/Getter'
import constants from '../../constants/constants'
import { ScreenLayout } from '../../AppStyles';


export default class StaticMenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'StaticMenu',
    });

  constructor(props) {
    super(props);
    this.state = {categories:[]};
  }

  onPressRecipe = name => {
    global.lastScreen = global.currentScreen;
    global.currentScreen = name;
    this.props.navigation?.navigate(name);
  };
 
  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='transparent' onPress={
      () => this.onPressRecipe(item.screenName)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.text}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
  console.log(Getter.getDrinks());
  var elements = [];
	for(let i = 0; i < this.state.categories.length; i++){
		elements.push(
    <Text>elemento: {i}, {this.state.categories[i].name}</Text>
		)
	}
	return (
		<View>
			<Text>Funziona?</Text>
			{ elements }
		</View>
    );
  }

  componentDidMount() {
  }
}
