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


const recipes = [
  { title: 'Static Menu', text: 'lorem ciao', photo_url: categories.pop().photo_url, screenName: 'StaticMenu' },
  { title: 'Discovery Menu', text: 'lorem ciao', photo_url: categories.pop().photo_url, screenName: 'DiscoveryMenu' },
  { title: 'Our Products', text: 'lorem ciao', photo_url: categories.pop().photo_url, screenName: 'OurProducts' },
  { title: 'Today Offers', text: 'lorem ciao', photo_url: categories.pop().photo_url, screenName: 'TodayOffers' },
]

var subtitle = 'Scegli e visita uno dei menù';
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
    this.state = {};
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

  header = () => {
    return (
    <View style={{
      flex: 1,
      height: 40,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding:3,
      marginTop: 3
    }}>
      <Text style={styles.title}>{subtitle}</Text>
    </View>);
  }

  render() {
    return (
       <FlatList
          style={styles.flatlist}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={recipes}
          ListHeaderComponent={this.header}
          stickyHeaderIndices={[0]}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
    );
  }

  componentDidMount() {
    this.setState({ categories: Getter.getChildren(constants.fixedDrinksPath() + '/birra') });
  }
}
