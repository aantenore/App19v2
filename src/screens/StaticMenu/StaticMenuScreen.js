import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, Button,Modal, TouchableOpacity } from 'react-native';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import { categories } from '../../data/dataArrays';
import HorizontalFlatList from './../../components/HorizontalFlatList/HorizontalFlatList'
import Getter, { _getDepthSubCategories } from '../../service/Getter'
import constants from '../../constants/constants'
import { ScreenLayout } from '../../AppStyles';
import Product from '../../utils/Product'
import img from './../../../assets/cibo.jpg';
//import Modal from 'react-native-modal';



export default class StaticMenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'StaticMenu',
  });

  constructor(props) {
    super(props);
    this.state = { categories: [], isModalVisible:false,};
  }
  
  componentDidMount() {
    Getter.getFoods(constants.fixedSalty)
      .then(result => this.setState({ categories: result }));
  }

  updateProducts(input) {
    path = path.concat(constants.pathOf(input));
    if (path)
      Getter.getFoods(constants.pathOf(input)).then(x => this.setState({ products: x }));
    Getter.getChildren(path)

    Getter._getDepthSubCategories()
  }
  setModalVisible(visible) {
    this.setState({isModalVisible: visible});
  }
  clickEventListener = (item) => {
    this.setState({categories: item}, () =>{
      this.setModalVisible(true);
    });
  }
  
  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='transparent'
    onPress={() => {this.clickEventListener(item)}}>
      <View style={styles.container}>
        <Image source={img} style={styles.photo}></Image>
        <Text style={styles.title}>{Product.getName(item)}</Text>
        <Text style={styles.description}>{Product.getDescription(item)}</Text>
        <View style={{ marginBottom: 3}}>
          <TouchableOpacity style={styles.ordinabutton} onPress={this.toggleModal}>
            <Text style={styles.buttontext}>ordina</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
      <FlatList
        style={styles.flatlist}
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={this.state.categories}
        renderItem={this.renderRecipes}
      />
      {/* <Modal
       animationType={'slide'}
       transparent={true}
       onRequestClose={() => this.setModalVisible(false)}
       visible={this.state.isModalVisible}>
         <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                
              </View>
              <View style={styles.popupButtons}>
                <TouchableOpacity  
                onPress={() => {this.setModalVisible(false) }}
                style={styles.btnClose}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
       </Modal> */}
      </View>
    );
  }
}
