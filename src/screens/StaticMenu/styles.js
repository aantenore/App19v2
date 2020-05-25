import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');


const recipeNumColums = 2;
const menuNumColumns = 1;
// item size
const RECIPE_ITEM_HEIGHT = 250;
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
    height: RECIPE_ITEM_HEIGHT / 3 ,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#444444',
    marginTop: 0,
    marginRight: 5,
    marginLeft: 5,
  },
  description: {
    flex: 1,
    fontSize: 16,
    textTransform: 'capitalize',
    textAlign: 'center',
    color: '#444444',
    marginTop: 2,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 0,
    marginBottom: 5
  },
  ordinabutton: {
    backgroundColor: '#0ad4bb',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: 240,
    height: 50,
    borderRadius: 20,
    fontSize: 18
  },
  buttontext: {
    color: 'white',
    textAlign: "center",
    height: 18,
    fontWeight: "bold",
    textTransform: 'uppercase'
  },


  /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height: 250,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent: 'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose: {
    height: 20,
    backgroundColor: '#20b2aa',
    padding: 20
  },
  modalInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;

