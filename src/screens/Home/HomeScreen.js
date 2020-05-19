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


const recipes = [
  { title: 'Static Menu', text: 'lorem ciao', photo_url: categories.pop().photo_url, screenName: 'Login' },
  { title: 'Discovery Menu', text: 'lorem ciao', photo_url: categories.pop().photo_url, screenName: 'Login' },
  { title: 'Our Products', text: 'lorem ciao', photo_url: categories.pop().photo_url, screenName: 'Login' },
  { title: 'Today Offers', text: 'lorem ciao', photo_url: categories.pop().photo_url, screenName: 'Login' },
]


export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  });

  constructor(props) {
    super(props);
    this.state={};
  }

  onPressRecipe = name => {
    global.lastScreen = global.currentScreen;
    global.currentScreen = name;
    this.props.navigation?.navigate(name);
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.7)' onPress={() => this.onPressRecipe(item.screenName)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.text}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <ScrollView style = {{flex:1}}>
      <HorizontalFlatList style = {{flex:1}}data={this.state.categories}></HorizontalFlatList>
      <FlatList
      style = {{flex:1}}
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={recipes}
        renderItem={this.renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </ScrollView>

    );
  }

  componentDidMount(){
    this.setState({categories:Getter.getChildren(constants.fixedDrinksPath()+'/birra')});
  }
}

/*
 <ScrollView>
          <ScrollView horizontal={true} style={{ flex:1,backgroundColor: '#0ad4bb'}}>
            <HorizontalFlatList></HorizontalFlatList>
          </ScrollView>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={recipes}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item.recipeId}`}
          />
        </ScrollView>
*/