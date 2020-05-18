import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import { categories } from '../../data/dataArrays';


const recipes =[
{title: 'Static Menu', text: 'lorem ciao',photo_url:categories.pop().photo_url ,screenName:'LoginScreen'},
{title: 'Discovery Menu', text: 'lorem ciao',photo_url:categories.pop().photo_url,screenName:'LoginScreen'},
{title: 'Our Products', text: 'lorem ciao',photo_url:categories.pop().photo_url,screenName:'LoginScreen'},
{title: 'Today Offers', text: 'lorem ciao',photo_url:categories.pop().photo_url,screenName:'LoginScreen'},
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
  }

  onPressRecipe = name => {
    global.lastScreen=global.currentScreen;
    global.currentScreen=name;
    this.props.navigation?.navigate(name);
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item.screenName)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.text}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
