import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import * as React from 'react';
import firebaseClass from '../constants/database';
import InputOrSlider from './InputOrSlider'
import ProductListItem from './ProductListItem'
import { styles } from '../assets/style';
import img from './../assets/img/cibo.jpg';




export default class DiscoveryList extends React.Component {

    render() {
        console.log(this.state.categoriesArray);
        return (
                <FlatList
                    data={this.state.categoriesArray}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.flatlistbutton} >
                                <Image style={styles.flatlistimg} source={img} />
                                {/* <InputOrSlider item={item} index={index} navigation={this.props.navigation}></InputOrSlider> */}

                            </TouchableOpacity>
                        );
                    }}>
                </FlatList>
   );
                { /*<FlatList data={this.state.categoriesArray}
                renderItem={({item,index})=>{
                    return(
                            <InputOrSlider item={item} index={index} navigation={this.props.navigation}></InputOrSlider>
                    )
                }}></FlatList>*/}
     
    };

    constructor(props) {
        super(props);
        this.state = { categoriesArray: [] };
    }

    componentDidMount() {
        this.findProducts();
    }

    findProducts() {
        let ref = firebaseClass.db().ref('/' + global.user + '/products');
        ref.child('fixed').once('value').then(categories => {
            let categoriesArray = [];
            categories.forEach(category => {
                let item = { category: category.key };
                category.child('features').forEach(feature => {
                    if (feature.key !== 'description') {
                        item[feature.key] = feature.val();
                    }
                });
                if (Object.keys(item).length > 1) categoriesArray.push(item);
            });
            this.setState({ categoriesArray });
        });
    }
    
}


/*
.on('value',snap=>{
            this.setState({combinedProducts:snap.child('combined'),fixedProducts:snap.child('fixed')});
        });
*/
