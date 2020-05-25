import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');


const recipeNumColums = 2;
const menuNumColumns = 1;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 4;
// orientation must fixed
const SCREEN_WIDTH = width - RECIPE_ITEM_MARGIN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 1,
    marginVertical:10,
    width: SCREEN_WIDTH,
    height: RECIPE_ITEM_HEIGHT,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  flatlist: {
    flex: 1,
    backgroundColor: '#0ad4bb',
  },
  photo: {
    width: SCREEN_WIDTH,
    height: RECIPE_ITEM_HEIGHT / 3 * 2,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 0,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 0,
    marginBottom: 5
  },

});

export default styles;

