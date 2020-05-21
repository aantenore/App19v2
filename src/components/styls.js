import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
const menuNumColumns = 1;
// item size
const RECIPE_ITEM_HEIGHT = 70;
const RECIPE_ITEM_MARGIN = 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: RECIPE_ITEM_MARGIN,
    width: (SCREEN_WIDTH - (menuNumColumns+1) * RECIPE_ITEM_MARGIN) / (2.3*menuNumColumns),
    height: RECIPE_ITEM_HEIGHT,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (menuNumColumns + 1) * RECIPE_ITEM_MARGIN) / (2.3*menuNumColumns),
    height: RECIPE_ITEM_HEIGHT/2,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title:{
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 5,
    marginRight: 0,
    marginLeft: 0,
    marginBottom:5,
  },
  category: {
    marginTop: 0,
    marginBottom: 5
  },

});

export default styles;
