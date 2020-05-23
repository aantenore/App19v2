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
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
	return (
		<FlatList
    style={{ flex: 1, backgroundColor: 'white' }}
          vertical
          showsVerticalScrollIndicator={true}
          numColumns={1}
          data={this.state.categories}
          ListHeaderComponent={this.header}
          stickyHeaderIndices={[0]}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
    />
    );
  }

  componentDidMount() {
    Getter.getFoods(constants.fixedSalty).then(result=>this.setState({categories:result}))
  }
}
