import { View, FlatList, Button } from 'react-native';

import * as React from 'react';
import ProductListItem from './ProductListItem'
import firebaseClass from '../constants/database';
import { styles } from '../assets/style';
import { getCameraTexture } from 'expo/build/AR';
import Getter from '../service/Getter'


export default class ProductList extends React.Component {

    constructor(props){
        super(props);
        this.state={foods:[{}],drinks:[{}]};
    }
    render(){
        console.log('foods: ',this.state.foods);
        console.log('drinks: ',this.state.drinks);
    return(
        <View style={{flex:1}}>
            <FlatList 
                data={this.state.foods.concat(this.state.drinks)}
                keyExtractor={(item,index)=>index}
                renderItem={({item,index})=>{
                            return(
                            <ProductListItem item={item} index={index}> </ProductListItem>
                           );
                        }}
            >
            </FlatList>
            </View>
     );
  };

  async componentDidMount(){
    
    var newFoods = Getter.getFoods();
    var newDrinks = Getter.getDrinks();
    this.setState({
        drinks: newDrinks,
        foods: newFoods,
    });

    }
}

/*findProducts(){
    let ref = firebaseClass.db().ref('/'+global.user+'/products');
    ref.child('combined').once('value').then(products=>{
        let combinedProductsArray=[]
        products.forEach(product => {
            let item = product.val();
            item.key= product.key;
            item.type='combined';
            combinedProductsArray.push(item);
        });
        this.setState({combinedProductsArray});
    });
    ref.child('fixed').once('value').then(categories=>{
        let fixedProductsArray = [];
        categories.forEach(category=>{
                category.forEach(product=>{
                if(product.key!=='features'){
                    let item = product.val();
                    item.key = product.key;
                    item.type='fixed';
                    fixedProductsArray.push(item);
                }
            });
        });
        this.setState({fixedProductsArray});
    });

.on('value',snap=>{
            this.setState({combinedProducts:snap.child('combined'),fixedProducts:snap.child('fixed')});
        });
*/
